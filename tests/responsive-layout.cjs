// Run from any directory: node tests/responsive-layout.cjs
// Optional: BROWSER=webkit WEBKIT_EXECUTABLE=/path/to/webkit-wrapper
// Optional: BROWSER_EXECUTABLE=/path/to/chromium
// Optional: RESPONSIVE_EVIDENCE_DIR=/path/to/save/measurements-and-screenshots
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { chromium, webkit } = require('playwright');

const root = path.resolve(__dirname, '..');
const browserName = process.env.BROWSER === 'webkit' ? 'webkit' : 'chromium';
const engine = browserName === 'webkit' ? webkit : chromium;
const evidenceDir = process.env.RESPONSIVE_EVIDENCE_DIR;
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' };
const server = http.createServer((request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const filename = path.resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
    if (!filename.startsWith(root + path.sep)) throw Error('Outside test site');
    response.setHeader('Content-Type', mime[path.extname(filename)] || 'application/octet-stream');
    response.end(fs.readFileSync(filename));
  } catch {
    response.writeHead(404).end('Not found');
  }
});
const viewports = [[320, 700], [390, 844], [768, 1024], [820, 1180], [1024, 768], [1366, 1024], [1440, 1000]];
const appLinks = ['.app-card.zone .zone-banner-link', '.app-card.zone .grid-free-test', '.app-card.findr .findr-banner-link', '.app-card.findr .grid-free-test', '.app-card.jobs .jobs-banner-link', '.app-card.jobs .grid-free-test'];

(async () => {
  let browser;
  const measurements = [];
  try {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const origin = 'http://127.0.0.1:' + server.address().port;
    const options = { headless: true };
    const executable = browserName === 'webkit' ? process.env.WEBKIT_EXECUTABLE || process.env.BROWSER_EXECUTABLE : process.env.BROWSER_EXECUTABLE;
    if (executable) options.executablePath = executable;
    if (browserName === 'chromium') options.args = ['--no-sandbox', '--disable-dev-shm-usage'];
    browser = await engine.launch(options);
    if (evidenceDir) fs.mkdirSync(evidenceDir, { recursive: true });
    console.log('Browser: ' + browserName + ' ' + browser.version());

    for (const [width, height] of viewports) {
      const touch = width <= 1366;
      const context = await browser.newContext({ viewport: { width, height }, hasTouch: touch, reducedMotion: width === 820 ? 'no-preference' : 'reduce' });
      // Independent hosted apps are outside this parent-layout regression.
      // Isolate them and third-party images so this test needs no external network.
      await context.route('**/*', route => {
        const request = route.request();
        if (new URL(request.url()).origin === origin) return route.continue();
        if (request.resourceType() === 'image') return route.fulfill({ status: 200, contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" fill="#193740"/></svg>' });
        return route.fulfill({ status: 200, contentType: 'text/html', body: '<!doctype html><title>External preview isolated</title>' });
      });
      const page = await context.newPage();
      const errors = [], badLocalResponses = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('response', response => { if (response.url().startsWith(origin + '/') && response.status() >= 400) badLocalResponses.push(response.status() + ' ' + response.url()); });
      await page.goto(origin + '/', { waitUntil: 'networkidle' });
      const collect = () => page.evaluate(() => {
        const box = element => {
          const rect = element.getBoundingClientRect();
          return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
        };
        return {
          overflow: document.documentElement.scrollWidth - innerWidth,
          header: box(document.querySelector('.site-header')),
          hero: box(document.querySelector('.hero-art')),
          previews: [...document.querySelectorAll('.device')].map(box),
          cards: [...document.querySelectorAll('.app-card')].map(box),
        };
      });
      const grid = await collect();
      assert(grid.overflow <= 1, 'Grid must fit ' + width + 'px');
      assert(grid.hero.x >= -1 && grid.hero.x + grid.hero.width <= width + 1, 'Preview container fits viewport');
      for (const preview of grid.previews) assert(preview.x >= -1 && preview.x + preview.width <= width + 1, 'Preview device fits viewport');
      const cards = grid.cards;
      assert.equal(cards.length, 3, 'All three app cards remain present');
      if (width >= 1100) {
        assert(Math.abs(cards[0].y - cards[1].y) < 1 && Math.abs(cards[1].y - cards[2].y) < 1, 'Desktop shows all three cards in one row');
        assert(Math.abs(cards[0].width - cards[2].width) < 1, 'Desktop columns are balanced');
      } else {
        assert(Math.abs(cards[0].y - cards[1].y) < 1, 'Phone/tablet starts with two columns');
        assert(cards[2].y > cards[0].y, 'Jobs takes its own row');
        assert(cards[2].width > cards[0].width * 1.9, 'Jobs spans both columns');
      }
      for (const element of await page.locator('.site-header a, .site-header button').all()) {
        const box = await element.boundingBox();
        if (!box || box.width === 0 || box.height === 0) continue;
        assert(box.x >= -1 && box.x + box.width <= width + 1 && box.y >= -1 && box.y + box.height <= grid.header.height + 1, 'Header controls stay within the header');
      }

      let checkedLinks = 0;
      for (const selector of appLinks) {
        const link = page.locator(selector);
        const box = await link.boundingBox();
        if (!box) continue; // Existing full desktop view uses the separate browser-build links.
        assert(box.width >= 44 && box.height >= 44, 'App action has a 44px touch target: ' + selector);
        await link.scrollIntoViewIfNeeded();
        assert(await link.evaluate(element => {
          const rect = element.getBoundingClientRect();
          return document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2)?.closest('a') === element;
        }), 'App link is not covered: ' + selector);
        const href = await link.getAttribute('href');
        const popupPromise = page.waitForEvent('popup');
        if (touch) await link.tap(); else await link.click();
        const popup = await popupPromise;
        await popup.waitForLoadState('domcontentloaded');
        assert.equal(popup.url(), href, 'App link keeps its existing destination');
        await popup.close();
        checkedLinks++;
      }

      await page.locator('#apps').scrollIntoViewIfNeeded();
      if (width <= 700) await page.waitForFunction(() => {
        const image = document.querySelector('.grid-zone-art img');
        return image.complete && image.naturalWidth > 0;
      });
      if (evidenceDir) await page.screenshot({ path: path.join(evidenceDir, browserName + '-' + width + '-grid.png') });
      const info = page.locator('#portal-list-view');
      if (touch) await info.tap(); else await info.click();
      const list = await collect();
      assert(list.overflow <= 1, 'Info view must fit ' + width + 'px');
      assert(list.cards[1].y > list.cards[0].y && list.cards[2].y > list.cards[1].y, 'Info view remains one full-width card per row');
      assert.deepEqual(errors, [], 'No page errors');
      assert.deepEqual(badLocalResponses, [], 'No missing local assets');
      measurements.push({ width, height, grid, list, checkedLinks });
      console.log('PASS ' + browserName + ' ' + width + ': header/previews, grid/Info bounds, columns and ' + checkedLinks + ' app-link touch targets and destinations');
      await context.close();
    }
    if (evidenceDir) fs.writeFileSync(path.join(evidenceDir, browserName + '-measurements.json'), JSON.stringify({ browser: browser.version(), measurements }, null, 2) + '\n');
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
