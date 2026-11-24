const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const {chromium, webkit} = require('playwright');

const root = process.cwd();
const engine = process.env.BROWSER === 'webkit' ? webkit : chromium;
const engineName = process.env.BROWSER === 'webkit' ? 'webkit' : 'chromium';
const mime = {'.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.webp':'image/webp', '.png':'image/png', '.svg':'image/svg+xml', '.jpg':'image/jpeg', '.jpeg':'image/jpeg'};
const server = http.createServer((request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const filename = path.resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
    if (!filename.startsWith(root + path.sep)) throw Error('Outside test site');
    response.setHeader('Content-Type', mime[path.extname(filename)] || 'application/octet-stream');
    response.end(fs.readFileSync(filename));
  } catch {
    response.statusCode = 404;
    response.end('Not found');
  }
});
const chapterIds = ['start','controls','quick-rooms','room-labels','doors','delete','zones','devices','device-edit','other-systems','circuits','additional','completed','backup','troubleshooting'];

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = 'http://127.0.0.1:' + server.address().port;
  const browser = await engine.launch({headless:true});
  try {
    for (const [width,height] of [[320,700],[390,844],[768,1024],[1440,1000]]) {
      const touch = width <= 768;
      const context = await browser.newContext({viewport:{width,height},hasTouch:touch,reducedMotion:'reduce'});
      // The hub has independent app previews. Keep those external applications out of this test.
      await context.route('**/*', route => {
        const url = new URL(route.request().url());
        if (url.origin === origin) return route.continue();
        const type = route.request().resourceType();
        return route.fulfill({status:200,contentType:type === 'stylesheet' ? 'text/css' : type === 'script' ? 'text/javascript' : 'text/html',body:type === 'stylesheet' || type === 'script' ? '' : '<!doctype html><title>External preview isolated</title>'});
      });
      const page = await context.newPage();
      const errors = [], badLocalResponses = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('response', response => {if (response.url().startsWith(origin + '/') && response.status() >= 400) badLocalResponses.push(response.status() + ' ' + response.url())});
      const activate = locator => touch ? locator.tap() : locator.click();
      const settle = () => page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
      const noOverflow = async label => assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), label + ' must fit ' + width + 'px');
      await page.goto(origin + '/');
      const tutorial = page.locator('.site-header .portal-tutorials-link');
      assert(await tutorial.isVisible(), 'Tutorials navigation visible at ' + width);
      const navBox = await tutorial.boundingBox();
      assert(navBox.x >= 0 && navBox.x + navBox.width <= width + 1 && navBox.y >= 0 && navBox.y + navBox.height <= height, 'Tutorials link is fully onscreen');
      await noOverflow('Home');
      if (width === 320 && engineName === 'chromium') await page.screenshot({path:'/tmp/hub-home-nav-320.png'});

      // Preserve the existing Info/list and installation navigation on the hub.
      await activate(page.locator('#portal-list-view'));
      assert.equal(await page.locator('#portal-list-view').getAttribute('aria-pressed'), 'true');
      assert(await page.locator('.applications').evaluate(el => el.classList.contains('portal-list-mode')));
      await activate(page.locator('.site-header .wordmark'));
      assert.equal(await page.locator('#portal-list-view').getAttribute('aria-pressed'), 'false');
      assert(!await page.locator('.applications').evaluate(el => el.classList.contains('portal-list-mode')));
      await activate(page.locator('#install-nav-link'));
      assert(await page.locator('#install-overview').evaluate(el => el.open));
      assert.equal(new URL(page.url()).hash, '#install');
      await activate(tutorial);
      await page.waitForURL('**/tutorials.html');
      assert.equal(await page.locator('.site-header .portal-tutorials-link').getAttribute('aria-current'), 'page');
      assert.deepEqual(await page.locator('.tutorial-chapter[id]').evaluateAll(nodes => nodes.map(node => node.id)), chapterIds);
      await noOverflow('Tutorial');
      if (width === 390 && engineName === 'chromium') await page.screenshot({path:'/tmp/hub-tutorial-phone.png'});
      if (width === 1440 && engineName === 'chromium') {await page.locator('#start').scrollIntoViewIfNeeded();await page.screenshot({path:'/tmp/hub-tutorial-desktop.png'})}

      const links = await page.locator('a[href], img[src], script[src], link[rel="stylesheet"][href]').evaluateAll(nodes => nodes.map(node => ({tag:node.tagName,url:node.href || node.src})));
      const checked = new Map();
      for (const resource of links) {
        const url = new URL(resource.url);
        if (url.origin !== origin) continue;
        const hash = decodeURIComponent(url.hash.slice(1));
        url.hash = '';
        if (!checked.has(url.href)) {
          const response = await context.request.get(url.href);
          assert.equal(response.status(), 200, 'local guide resource resolves: ' + url.href);
          checked.set(url.href, response.headers()['content-type']?.includes('text/html') ? await response.text() : null);
        }
        if (hash && checked.get(url.href)) {
          const found = await page.evaluate(({html,id}) => !!new DOMParser().parseFromString(html, 'text/html').getElementById(id), {html:checked.get(url.href),id:hash});
          assert(found, 'guide link has a real anchor: ' + resource.url);
        }
      }
      const shots = page.locator('.screenshot-link');
      assert.equal(await shots.count(), 15, 'guide includes all 15 real screenshots');
      for (const image of await page.locator('.tutorial-shot img').all()) {
        await image.scrollIntoViewIfNeeded();
        await image.evaluate(el => el.complete && el.naturalWidth > 0 ? true : new Promise((resolve,reject) => {el.addEventListener('load',()=>resolve(true),{once:true});el.addEventListener('error',()=>reject(Error('Screenshot failed: '+el.src)),{once:true})}));
        assert(await image.evaluate(el => el.complete && el.naturalWidth > 0 && el.naturalHeight > 0), 'screenshot loads');
      }
      await noOverflow('Tutorial after image loads');

      // On phones the chapter menu must close, scroll and focus its destination.
      if (width <= 720) {
        const jump = page.locator('.tutorial-jump');
        await activate(jump.locator('summary'));
        await activate(jump.locator('a[href="#delete"]'));
        await settle();
        assert(!await jump.evaluate(el => el.open), 'mobile chapter menu closes after choosing a chapter');
        assert.equal(new URL(page.url()).hash, '#delete');
        assert.equal(await page.evaluate(() => document.activeElement.id), 'delete', 'chapter receives keyboard focus');
        const chapter = await page.locator('#delete').boundingBox();
        const header = await page.locator('.site-header').boundingBox();
        assert(chapter.y >= header.height - 2 && chapter.y < height / 2, 'chapter heading remains below the sticky header');
        if (width === 390 && engineName === 'chromium') await page.screenshot({path:'/tmp/hub-tutorial-delete-phone.png'});
      }

      // The screenshot viewer opens by keyboard on desktop and by touch on phones.
      const opener = shots.first();
      await opener.scrollIntoViewIfNeeded();
      if (touch) await opener.tap();
      else {await opener.focus();await page.keyboard.press('Enter')}
      const viewer = page.locator('#screenshot-viewer');
      await viewer.waitFor({state:'visible'});
      await page.waitForFunction(()=>{const image=document.querySelector('#screenshot-image');return image.complete&&image.naturalWidth>0});
      assert.equal(await page.evaluate(() => document.activeElement.id), 'screenshot-close');
      assert.equal(await viewer.getAttribute('aria-labelledby'), 'screenshot-caption');
      for(let i=0;i<7;i++){await page.keyboard.press('Tab');assert(await page.evaluate(()=>document.activeElement===document.body||!!document.activeElement.closest('#screenshot-viewer')),'Tab cannot focus background page controls')}
      assert((await page.locator('#screenshot-caption').innerText()).length > 10);
      const fitted = await page.locator('#screenshot-image').boundingBox();
      const stage = await page.locator('.screenshot-stage').boundingBox();
      assert(fitted.width <= stage.width + 1 && fitted.height <= stage.height + 1, 'viewer initially fits image');
      await activate(page.locator('#screenshot-size'));
      assert.equal(await page.locator('#screenshot-size').getAttribute('aria-pressed'), 'true');
      const zoomed = await page.locator('#screenshot-image').boundingBox();
      assert(zoomed.width > fitted.width || zoomed.height > fitted.height, 'Zoom in enlarges actual screenshot');
      assert(await page.locator('.screenshot-stage').evaluate(el => el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight), 'zoomed screenshot can scroll');
      await activate(page.locator('#screenshot-size'));
      assert.equal(await page.locator('#screenshot-size').innerText(), 'Zoom in');
      assert.equal(await page.locator('#screenshot-size').getAttribute('aria-pressed'), 'false');
      await noOverflow('Open screenshot dialog');
      if (width === 390 || width === 1440) await page.screenshot({path:'/tmp/hub-tutorial-viewer-' + engineName + '-' + width + '.png'});
      await activate(page.locator('#screenshot-close'));
      await viewer.waitFor({state:'hidden'});
      await page.waitForFunction(()=>!document.querySelector('#screenshot-image').hasAttribute('src'));
      assert(await opener.evaluate(el => el === document.activeElement), 'Close returns focus to screenshot link');
      assert.equal(await page.locator('#screenshot-image').getAttribute('src'), null, 'closed viewer releases image');
      await activate(opener);
      await page.keyboard.press('Escape');
      await viewer.waitFor({state:'hidden'});
      await page.waitForFunction(()=>!document.querySelector('#screenshot-image').hasAttribute('src'));
      assert(await opener.evaluate(el => el === document.activeElement), 'Escape returns focus');
      await activate(opener);
      // The page edge is outside the dialog for every viewport; test native backdrop hit testing.
      if (touch) await page.touchscreen.tap(2,2);else await page.mouse.click(2,2);
      await viewer.waitFor({state:'hidden'});
      await page.waitForFunction(()=>!document.querySelector('#screenshot-image').hasAttribute('src'));
      assert(await opener.evaluate(el => el === document.activeElement), 'backdrop dismissal returns focus');

      // A drag which starts inside the picture must not close on the backdrop.
      if (!touch) {
        await activate(opener);
        const picture = await page.locator('#screenshot-image').boundingBox();
        await page.mouse.move(picture.x + picture.width / 2, picture.y + picture.height / 2);
        await page.mouse.down();await page.mouse.move(2,2,{steps:8});await page.mouse.up();
        assert(await viewer.isVisible(), 'image-to-backdrop drag does not dismiss');
        await page.keyboard.press('Escape');
      }
      assert.deepEqual(errors, [], 'no script errors at ' + width);
      assert.deepEqual(badLocalResponses, [], 'no missing local guide resources at ' + width);
      await context.close();
      console.log('PASS ' + engineName + ' ' + width + ': Home navigation, 15 chapters, local images/links, layout, screenshot zoom/fit/dismissal and focus');
    }

    // Existing Update behavior retains caller context while removing only obsolete refresh.
    const context = await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
    await context.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.fulfill({status:200,contentType:'text/html',body:'<!doctype html>'}));
    const page = await context.newPage();
    await page.goto(origin + '/index.html?keep=yes&refresh=old#install');
    await Promise.all([page.waitForURL(url => url.searchParams.has('hub-update')), page.locator('#portal-update').click()]);
    const updated = new URL(page.url());
    assert.equal(updated.pathname, '/index.html');assert.equal(updated.searchParams.get('keep'), 'yes');assert.equal(updated.searchParams.has('refresh'), false);assert.equal(updated.hash, '#install');
    const stamp = updated.searchParams.get('hub-update');assert(/^\d+$/.test(stamp));
    const localAssets = await page.locator('link[rel="stylesheet"][href], img[src]').evaluateAll(nodes => nodes.map(node => node.href || node.src).filter(url => new URL(url).origin === location.origin));
    assert(localAssets.length > 0);assert(localAssets.every(url => new URL(url).searchParams.get('hub-update') === stamp), 'Update cache-busts all local stylesheets and images');
    assert(await page.locator('#install-overview').evaluate(el => el.open));
    await context.close();
    console.log('PASS ' + engineName + ': existing Update URL and local asset refresh preserved');
    const plain = await browser.newContext({viewport:{width:390,height:844},javaScriptEnabled:false,reducedMotion:'reduce'});
    const staticPage = await plain.newPage();await staticPage.goto(origin + '/tutorials.html');
    assert.equal(await staticPage.locator('.tutorial-chapter').count(),15);
    await staticPage.locator('.screenshot-link').first().click();await staticPage.waitForURL(/\.webp$/);
    assert((await staticPage.locator('img').first().getAttribute('src')).includes('.webp'),'without JavaScript screenshot still opens as image');
    await plain.close();
    const printContext=await browser.newContext();const printPage=await printContext.newPage();await printPage.goto(origin+'/tutorials.html');
    const faq=printPage.locator('.tutorial-faq');assert(await faq.count()>0);
    await faq.first().evaluate(el=>el.open=true);
    const original=await faq.evaluateAll(nodes=>nodes.map(el=>el.open));
    await printPage.evaluate(()=>window.dispatchEvent(new Event('beforeprint')));assert((await faq.evaluateAll(nodes=>nodes.map(el=>el.open))).every(Boolean),'print exposes FAQ answers');
    await printPage.emulateMedia({media:'print'});assert(await printPage.locator('.site-header').isHidden());assert(await printPage.locator('#delete').isVisible());
    await printPage.evaluate(()=>window.dispatchEvent(new Event('afterprint')));assert.deepEqual(await faq.evaluateAll(nodes=>nodes.map(el=>el.open)),original,'printing restores existing FAQ state');
    await printContext.close();console.log('PASS '+engineName+': no-JavaScript screenshot fallback and printable FAQ content');
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {console.error(error);server.close();process.exitCode = 1});
