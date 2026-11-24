/* Run from the hub root with Playwright available, as for tests/tutorials.cjs. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const vm = require('node:vm');
const { chromium, webkit } = require('playwright');

const root = process.cwd(), apps = ['zone-sketch', 'jobs', 'findr'];
const browserName = process.env.BROWSER === 'webkit' ? 'webkit' : 'chromium';
const engine = browserName === 'webkit' ? webkit : chromium;
const KEY = 'hub-tutorial-progress-v1';
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml' };
const server = http.createServer((request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const file = path.resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
    if (!file.startsWith(root + path.sep)) throw Error('Outside test site');
    response.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
    response.end(fs.readFileSync(file));
  } catch { response.statusCode = 404; response.end('Not found'); }
});

const sandbox = { window: {} };
for (const file of ['tutorial-tasks-zone.js', 'tutorial-tasks-jobs.js', 'tutorial-tasks-findr.js']) {
  new vm.Script(fs.readFileSync(path.join(root, file), 'utf8'), { filename: file }).runInNewContext(sandbox, { timeout: 2000 });
}
const registry = JSON.parse(JSON.stringify(sandbox.window.TutorialTasks));
const imageSource = image => typeof image === 'string' ? image : image?.src;
for (const app of apps) {
  const tasks = registry[app];
  assert(Array.isArray(tasks) && tasks.length > 0, app + ' has guided tasks');
  assert.equal(new Set(tasks.map(task => task.id)).size, tasks.length, app + ' task IDs are unique');
  for (const task of tasks) {
    assert(/^[a-z0-9-]+$/.test(task.id), 'task ID is safe in a fragment');
    for (const key of ['title', 'group', 'goal']) assert(typeof task[key] === 'string' && task[key].trim(), app + '/' + task.id + ' has ' + key);
    if (task.reference !== undefined) assert(typeof task.reference === 'string' && task.reference.trim(), task.id + ' has a usable reference');
    assert(task.steps.length >= 3 && task.steps.length <= 7, task.id + ' has 3–7 focused steps');
    assert.equal(new Set(task.steps.map(step => step.id)).size, task.steps.length, task.id + ' step IDs are unique');
    for (const step of task.steps) {
      assert(/^[a-z0-9-]+$/.test(step.id), task.id + ' has stable step IDs');
      for (const key of ['title', 'instruction', 'check']) assert(typeof step[key] === 'string' && step[key].trim(), task.id + '/' + step.id + ' has ' + key);
      const source = imageSource(step.image);
      if (source) {
        assert(step.image && typeof step.image.alt === 'string' && step.image.alt.trim(), task.id + ' screenshot has meaningful alternative text');
        assert(source.startsWith('assets/tutorials/'), task.id + ' uses a local screenshot');
        const file = path.resolve(root, source);
        assert(file.startsWith(root + path.sep) && fs.statSync(file).isFile(), 'screenshot exists: ' + source);
      }
    }
  }
}
console.log('PASS guided data: all three apps, stable IDs, 3–7 steps, required text and local screenshot files');

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = 'http://127.0.0.1:' + server.address().port;
  const browser = await engine.launch({ headless: true });
  try {
    for (const [width, height] of [[320, 700], [390, 844], [1440, 1000]]) {
      const touch = width < 700;
      const context = await browser.newContext({ viewport: { width, height }, hasTouch: touch, reducedMotion: 'reduce' });
      await context.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.fulfill({ status: 200, contentType: 'text/html', body: '<!doctype html><title>External app isolated</title>' }));
      const page = await context.newPage(), errors = [], missing = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('response', response => { if (response.url().startsWith(origin + '/') && response.status() >= 400) missing.push(response.status() + ' ' + response.url()); });
      const activate = locator => touch ? locator.tap() : locator.click();
      const noOverflow = async label => assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${label} fits ${width}px`);
      const contrast = async () => {
        const failures = await page.evaluate(() => {
          const rgb = value => (value.match(/[\d.]+/g) || []).map(Number);
          const over = (front, back) => { const a = front[3] ?? 1; return front.slice(0, 3).map((v, i) => v * a + back[i] * (1 - a)); };
          const background = node => {
            const chain = []; for (let current = node; current; current = current.parentElement) chain.unshift(current);
            return chain.reduce((color, current) => over(rgb(getComputedStyle(current).backgroundColor), color), [255, 255, 255]);
          };
          const luminance = values => values.map(v => v / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4).reduce((sum, v, i) => sum + v * [.2126, .7152, .0722][i], 0);
          return [...document.querySelectorAll('#guided-tutorials .guided-instruction, #guided-tutorials .guided-check, #guided-tutorials .guided-progress-label, #guided-step-title, #guided-tutorials .guided-primary, #guided-tutorials .guided-task p, #guided-tutorials .guided-task h3, #guided-tutorials .guided-task-status')].filter(node => node.checkVisibility()).flatMap(node => {
            const style = getComputedStyle(node), bg = background(node), fg = over(rgb(style.color), bg);
            const a = luminance(fg), b = luminance(bg), ratio = (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
            const size = parseFloat(style.fontSize), large = size >= 24 || size >= 18.66 && Number(style.fontWeight) >= 700;
            return ratio + .05 >= (large ? 3 : 4.5) ? [] : [{ text: node.textContent.slice(0, 70), ratio, foreground: style.color, background: bg }];
          });
        });
        assert.deepEqual(failures, [], 'guided instructions and primary controls have readable text contrast');
      };
      const goto = async hash => { await page.goto(origin + '/tutorials.html' + hash); await page.locator('#guided-tutorials').waitFor({ state: 'visible' }); };
      const player = page.locator('#guided-player');
      const progress = () => page.evaluate(key => JSON.parse(localStorage.getItem(key) || '{}'), KEY);
      const done = async (app, task) => (await progress()).tasks?.[app + '/' + task.id]?.done || [];
      const showStep = async (app, task, index) => {
        await page.waitForURL(url => url.hash === `#learn/${app}/${task.id}/${index + 1}`);
        await page.waitForFunction(title => document.querySelector('#guided-step-title')?.textContent.trim() === title, task.steps[index].title);
        assert(await player.isVisible());
        assert.equal(await page.locator('#guided-step-title').innerText(), task.steps[index].title);
        await noOverflow('Guided step');
      };
      await goto('');
      assert(await page.locator('#guided-tutorials').isVisible(), 'guided learning is the default');
      assert.equal(await page.locator('.tutorial-guide:visible').count(), 0, 'reference chapters do not crowd the guided default');
      for (const app of apps) {
        const control = page.locator(`[data-learn-app="${app}"]:visible`).first();
        assert(await control.isVisible(), app + ' has an accessible app choice');
        const box = await control.boundingBox(); assert(box.width >= 44 && box.height >= 44, app + ' app choice is touch-sized');
      }
      await noOverflow('Guided catalog');
      await contrast();
      if (width === 320) {
        const sources = [...new Set(Object.values(registry).flatMap(tasks => tasks.flatMap(task => task.steps.map(step => imageSource(step.image)).filter(Boolean))))];
        const decoded = await page.evaluate(async sources => {
          const failed = [];
          // Decode serially so a large reference library does not retain every image.
          for (const source of sources) {
            const image = new Image(); image.src = source;
            try { await image.decode(); if (!image.naturalWidth || !image.naturalHeight) failed.push(source); }
            catch { failed.push(source); }
          }
          return failed;
        }, sources);
        assert.deepEqual(decoded, [], 'every guided screenshot decodes in the browser, including guided-only images');
      }

      // Every published task is reachable, and every reference opens its owning guide.
      for (const app of apps) {
        await activate(page.locator(`[data-learn-app="${app}"]:visible`).first());
        await page.waitForURL(url => url.hash === `#learn/${app}`);
        await page.waitForFunction(app => document.querySelector('#guided-tutorials')?.dataset.app === app && !!document.querySelector('#guided-catalog'), app);
        for (const task of registry[app]) {
          assert(await page.locator(`#guided-tutorials a[href^="#learn/${app}/${task.id}/"]`).count() > 0, task.id + ' is listed in its catalog');
          const id = (task.reference || app).replace(/^#/, '');
          assert.equal(await page.locator('#' + id).evaluate(node => node.closest('.tutorial-guide')?.id), app, task.id + ' links to its owning reference');
        }
        await noOverflow(app + ' catalog');
      }

      const app = 'zone-sketch', task = registry[app][0];
      await goto(`#learn/${app}/${task.id}/1`);
      await showStep(app, task, 0);
      await contrast();
      assert.equal(await page.locator('#guided-player [data-action="next"]').count(), 1, 'exactly one primary next control');
      assert.equal(await page.locator('#guided-player [data-action="back"]').isDisabled(), true, 'first step cannot go back');
      for (const action of ['next', 'tasks', 'restart']) {
        const control = page.locator(`#guided-player [data-action="${action}"]`);
        if (await control.count() && await control.isVisible()) {
          const box = await control.boundingBox(); assert(box.height >= 44 && box.width >= 44, action + ' control has a comfortable touch target');
        }
      }
      const before = await progress();
      await activate(player.locator('[data-action="next"]'));
      await showStep(app, task, 1);
      await page.waitForFunction(() => document.activeElement.id === 'guided-step-title');
      const focusBox = await page.locator('#guided-step-title').boundingBox(), sticky = await page.locator('.site-header').boundingBox();
      assert(focusBox.y >= sticky.height - 2 && focusBox.y < height, 'new step heading is focused and visible below the sticky header');
      const afterFirst = await progress();
      assert.notDeepEqual(afterFirst, before, 'explicit next records practice progress');
      await page.goBack(); await showStep(app, task, 0);
      assert.deepEqual(await done(app, task), [task.steps[0].id], 'browser back never completes the next step');
      await page.goForward(); await showStep(app, task, 1);
      await activate(player.locator('[data-action="back"]')); await showStep(app, task, 0);
      assert.deepEqual(await done(app, task), [task.steps[0].id], 'Back never completes the step being left');
      await activate(player.locator('[data-action="next"]')); await showStep(app, task, 1);
      await activate(player.locator('[data-action="tasks"]'));
      await page.waitForURL(url => url.hash === `#learn/${app}`);
      await page.reload();
      await activate(page.locator(`#guided-tutorials a[href^="#learn/${app}/${task.id}/"]`).first());
      await showStep(app, task, 1);
      await page.reload(); await showStep(app, task, 1);

      // A URL can visit a later step, but cannot imply all prior actions were done.
      const skippedTask = registry.jobs[0];
      await goto(`#learn/jobs/${skippedTask.id}/${skippedTask.steps.length}`);
      await showStep('jobs', skippedTask, skippedTask.steps.length - 1);
      await activate(player.locator('[data-action="next"]'));
      assert.deepEqual(await done('jobs', skippedTask), [skippedTask.steps.at(-1).id], 'skipping to the final URL does not mark earlier steps');
      assert(await page.locator('#guided-complete').isHidden(), 'completion is not shown while earlier steps are unfinished');

      // Complete a task by ordinary clicks, and retain completion across reload.
      await goto(`#learn/${app}/${task.id}/1`);
      for (let index = 0; index < task.steps.length; index++) {
        await showStep(app, task, index);
        if (!touch) { await player.locator('[data-action="next"]').focus(); await page.keyboard.press('Enter'); }
        else await activate(player.locator('[data-action="next"]'));
      }
      await page.locator('#guided-complete').waitFor({ state: 'visible' });
      assert.equal(await page.locator('#guided-step-title').count(), 0, 'completion replaces the action step');
      assert.deepEqual(await done(app, task), task.steps.map(step => step.id), 'completion retains every explicit step');
      await page.reload(); await page.locator('#guided-complete').waitFor({ state: 'visible' });
      const otherProgress = JSON.stringify(await progress());
      await activate(page.locator('#guided-tutorials [data-action="restart"]:visible').first());
      await showStep(app, task, 0);
      assert(await page.locator('#guided-complete').isHidden());
      assert.notEqual(JSON.stringify(await progress()), otherProgress, 'restart resets current task progress');
      assert.deepEqual(await done(app, task), [], 'restart clears this task');
      assert.deepEqual(await done('jobs', skippedTask), [skippedTask.steps.at(-1).id], 'restart preserves other tasks');

      // Dynamic screenshots use the existing accessible viewer, including after a step change.
      const pictured = registry.findr.flatMap(task => task.steps.map((step, index) => ({ task, step, index }))).filter(record => imageSource(record.step.image));
      assert(pictured.length >= 2, 'FINDR provides real screenshots for practice');
      for (const { task: pictureTask, step, index } of pictured.slice(0, 2)) {
        await goto(`#learn/findr/${pictureTask.id}/${index + 1}`);
        await showStep('findr', pictureTask, index);
        const link = player.locator('a.screenshot-link'); assert.equal(await link.count(), 1, 'one relevant screenshot appears on the step');
        await activate(link);
        const viewer = page.locator('#screenshot-viewer'); await viewer.waitFor({ state: 'visible' });
        await page.waitForFunction(() => { const image = document.querySelector('#screenshot-image'); return image.complete && image.naturalWidth > 0; });
        assert.equal(await page.locator('#screenshot-image').getAttribute('src'), new URL(imageSource(step.image), origin + '/').href);
        assert.equal(await page.evaluate(() => document.activeElement.id), 'screenshot-close');
        await activate(page.locator('#screenshot-size')); assert.equal(await page.locator('#screenshot-size').getAttribute('aria-pressed'), 'true');
        await page.keyboard.press('Escape'); await viewer.waitFor({ state: 'hidden' });
        assert(await link.evaluate(node => node === document.activeElement), 'viewer returns focus to a dynamically rendered screenshot');
        await noOverflow('Guided screenshot');
      }

      await goto('#learn/jobs');
      const search = page.locator('#guided-search');
      assert(await search.evaluate(node => !!(node.labels?.length || node.getAttribute('aria-label') || node.getAttribute('aria-labelledby'))), 'task search has an accessible name');
      const searchTask = registry.jobs.find(task => /certificate/i.test(task.title)) || registry.jobs[0];
      await search.fill(searchTask.title);
      assert(await page.locator(`#guided-categories [data-task-id="${searchTask.id}"]`).isVisible(), 'search finds a task by its title');
      await search.fill('no-task-matches-this-synthetic-query-993');
      assert.equal(await page.locator('#guided-categories a[href^="#learn/jobs/"]:visible').count(), 0, 'unmatched search hides unrelated task choices');
      await search.fill('');
      assert.equal(await page.locator(`#guided-categories a[data-task-id="${searchTask.id}"]`).getAttribute('hidden'), null, 'clearing search restores the catalog');

      // Full reference fragments keep their existing public meaning.
      for (const [hash, owner] of [['#delete', 'zone-sketch'], ['#jobs-certificates', 'jobs'], ['#findr-manuals', 'findr']]) {
        await page.goto(origin + '/tutorials.html' + hash);
        await page.locator('#' + owner).waitFor({ state: 'visible' });
        assert(await page.locator('#guided-tutorials').isHidden(), 'old reference fragment opens the full guide');
        assert.equal(new URL(page.url()).hash, hash);
      }
      await goto(`#learn/${app}/${task.id}/1`);
      await showStep(app, task, 0);
      // Printing from guided mode exposes the full reference, then restores the player.
      await page.evaluate(() => window.dispatchEvent(new Event('beforeprint')));
      await page.emulateMedia({ media: 'print' });
      assert(await page.locator('#guided-tutorials').isHidden(), 'practice controls stay out of printed reference');
      for (const id of apps) assert(await page.locator('#' + id).isVisible(), 'printing from guided mode includes ' + id);
      await page.emulateMedia({ media: 'screen' });
      await page.evaluate(() => window.dispatchEvent(new Event('afterprint')));
      assert(await player.isVisible(), 'printing returns to the same guided step');
      assert.equal(await page.locator('.tutorial-guide:visible').count(), 0, 'printing restores hidden reference');
      if (browserName === 'chromium') await page.screenshot({ path: `/tmp/hub-guided-${width}.png` });
      assert.deepEqual(errors, [], 'no script errors at ' + width);
      assert.deepEqual(missing, [], 'all guided assets resolve at ' + width);
      assert.equal(context.pages().length, 1, 'practice progress never opens or changes the live apps');
      await context.close();
      console.log(`PASS ${browserName} ${width}: catalogs, touch/keyboard controls, explicit progress, back/history, reload/resume, skip prevention, completion/restart, dynamic viewer, search and references`);
    }

    const blocked = await browser.newContext({ viewport: { width: 390, height: 844 } });
    await blocked.addInitScript(() => { Object.defineProperty(window, 'localStorage', { configurable: true, get() { throw new DOMException('Storage blocked in this test', 'SecurityError'); } }); });
    const blockedPage = await blocked.newPage(), blockedErrors = [];
    blockedPage.on('pageerror', error => blockedErrors.push(error.message));
    const task = registry.jobs[0];
    await blockedPage.goto(origin + `/tutorials.html#learn/jobs/${task.id}/1`);
    await blockedPage.locator('#guided-player [data-action="next"]').click();
    await blockedPage.waitForURL(url => url.hash.endsWith('/2'));
    await blockedPage.waitForFunction(title => document.querySelector('#guided-step-title')?.textContent === title, task.steps[1].title);
    assert.equal(await blockedPage.locator('#guided-step-title').innerText(), task.steps[1].title, 'practice still works when storage is blocked');
    assert.deepEqual(blockedErrors, [], 'blocked storage never breaks the guide');
    assert.match(await blockedPage.locator('.guided-storage-note').innerText(), /cannot be saved/i, 'blocked storage is explained without claiming persistence');
    await blocked.close();

    const stale = await browser.newContext({ viewport: { width: 390, height: 844 } });
    await stale.addInitScript(({ key, task }) => localStorage.setItem(key, JSON.stringify({ version: 1, tasks: { ['jobs/' + task.id]: { done: ['removed-step', task.steps[0].id, task.steps[0].id], cursor: 999 } }, last: { jobs: task.id } })), { key: KEY, task });
    const stalePage = await stale.newPage();
    await stalePage.goto(origin + `/tutorials.html#learn/jobs/${task.id}/done`);
    await stalePage.waitForFunction(title => document.querySelector('#guided-step-title')?.textContent === title, task.steps[1].title);
    assert(await stalePage.locator('#guided-complete').isHidden(), 'forged completion URL and stale saved IDs cannot finish an incomplete task');
    assert.deepEqual(await stalePage.evaluate(({ key, taskId }) => JSON.parse(localStorage.getItem(key)).tasks['jobs/' + taskId].done, { key: KEY, taskId: task.id }), [task.steps[0].id], 'removed and duplicate saved steps are sanitized');
    await stale.close();

    const plain = await browser.newContext({ viewport: { width: 320, height: 700 }, javaScriptEnabled: false });
    const plainPage = await plain.newPage();
    await plainPage.goto(origin + '/tutorials.html');
    for (const app of apps) assert(await plainPage.locator('#' + app).isVisible(), app + ' complete reference survives without JavaScript');
    const screenshot = plainPage.locator('#zone-sketch a.screenshot-link').first(), target = new URL(await screenshot.getAttribute('href'), origin + '/').href;
    await screenshot.click(); await plainPage.waitForURL(target);
    assert(await plainPage.locator('img').count() > 0, 'no-JavaScript screenshot link opens the real image');
    await plain.close();
    console.log(`PASS ${browserName}: blocked-storage operation and complete no-JavaScript reference fallback`);
  } finally { await browser.close(); await new Promise(resolve => server.close(resolve)); }
})().catch(error => { console.error(error); server.close(); process.exitCode = 1; });
