/* Small, self-paced tasks. Progress belongs only to this guide, never to the apps. */
(() => {
  'use strict';
  const root = document.getElementById('guided-tutorials');
  const reference = document.getElementById('tutorial-reference');
  const returnLink = document.getElementById('guided-return');
  const tasks = window.TutorialTasks;
  const apps = {
    'zone-sketch': {name: 'Zone Sketch', icon: 'assets/tutorials/zone-sketch-icon.webp', url: 'https://william2535.github.io/ZoneSketch-Unstable/'},
    jobs: {name: 'Jobs', icon: 'assets/jobs-authentic.webp', url: 'https://william2535.github.io/Jobs/'},
    findr: {name: 'FINDR', icon: 'assets/tutorials/findr-icon.png', url: 'https://william2535.github.io/Findr/app/'}
  };
  // If a data script fails to load, keep the complete reference available.
  if (!root || !reference || !tasks || Object.keys(apps).some(app => !Array.isArray(tasks[app]) || !tasks[app].length)) return;

  const storageKey = 'hub-tutorial-progress-v1';
  let state = {version: 1, tasks: {}, last: {}};
  let storageAvailable = true;
  try {
    let saved = null;
    const raw = localStorage.getItem(storageKey);
    try { saved = JSON.parse(raw || 'null'); } catch { /* A corrupt old record must not block learning. */ }
    if (saved?.version === 1 && saved.tasks && typeof saved.tasks === 'object' && !Array.isArray(saved.tasks)) {
      // Accept only known task and step IDs, and clamp old cursors after content updates.
      for (const [app, list] of Object.entries(tasks)) {
        for (const task of list) {
          const key = app + '/' + task.id;
          const record = saved.tasks[key];
          if (!record || typeof record !== 'object') continue;
          const done = Array.isArray(record.done) ? task.steps.filter(step => record.done.includes(step.id)).map(step => step.id) : [];
          const cursor = Number.isInteger(record.cursor) ? Math.max(0, Math.min(task.steps.length - 1, record.cursor)) : 0;
          state.tasks[key] = {done, cursor};
        }
        const last = saved.last?.[app];
        if (typeof last === 'string' && list.some(task => task.id === last)) state.last[app] = last;
      }
    }
    const probe = storageKey + '-probe';
    localStorage.setItem(probe, '1');
    localStorage.removeItem(probe);
  } catch { storageAvailable = false; }

  function save() {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); }
    catch { storageAvailable = false; }
    document.querySelectorAll('.guided-storage-note').forEach(node => {
      node.textContent = storageAvailable ? 'Your tutorial progress saves on this device.' : 'Progress works here, but cannot be saved in this browser.';
    });
  }
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function link(text, href, className) {
    const node = el('a', className, text);
    node.href = href;
    return node;
  }
  function button(text, action) {
    const node = el('button', '', text);
    node.type = 'button';
    node.dataset.action = action;
    return node;
  }
  function path(app, task, step = 0) {
    return '#learn/' + app + (task ? '/' + task.id + '/' + (step === 'done' ? 'done' : step + 1) : '');
  }
  function progress(app, task) {
    return state.tasks[app + '/' + task.id] || {done: [], cursor: 0};
  }
  function remember(app, task, cursor) {
    const record = progress(app, task);
    state.tasks[app + '/' + task.id] = {...record, cursor};
    state.last[app] = task.id;
    save();
  }
  function navigate(hash, replace = false) {
    if (replace) {
      history.replaceState(null, '', hash);
      render(true);
    } else if (location.hash === hash) render(true);
    else location.hash = hash;
  }
  function announce(text) {
    let region = document.getElementById('guided-announcement');
    if (!region) {
      region = el('p', 'guided-sr-only');
      region.id = 'guided-announcement';
      region.setAttribute('role', 'status');
      region.setAttribute('aria-live', 'polite');
      document.body.append(region);
    }
    region.textContent = text;
  }
  function focusHeading(node) {
    node.tabIndex = -1;
    requestAnimationFrame(() => {
      node.focus({preventScroll: true});
      root.scrollIntoView({block: 'start', behavior: 'instant'});
    });
  }
  function appNav(app) {
    const nav = el('nav', 'guided-apps');
    nav.setAttribute('aria-label', 'Choose an app to learn');
    for (const [id, info] of Object.entries(apps)) {
      const choice = link('', path(id));
      choice.dataset.learnApp = id;
      if (id === app) choice.setAttribute('aria-current', 'page');
      const icon = el('img');
      icon.src = info.icon;
      icon.alt = '';
      icon.width = icon.height = 32;
      choice.append(icon, el('span', '', info.name));
      nav.append(choice);
    }
    return nav;
  }
  function referenceLink(app, task) {
    return link(task?.reference ? 'Read the full explanation' : 'Full reference guide', '#' + (task?.reference || app), 'guided-reference-link');
  }
  function storageNote() {
    return el('p', 'guided-storage-note', storageAvailable ? 'Your tutorial progress saves on this device.' : 'Progress works here, but cannot be saved in this browser.');
  }
  function catalog(app, focus) {
    const intro = el('header', 'guided-intro');
    intro.append(el('p', 'tutorial-eyebrow', 'APP HUB / GUIDED TUTORIALS'));
    const heading = el('h1', '', 'One small task at a time.');
    intro.append(heading, el('p', '', 'Pick an app. Choose a task. Follow one step, then the next.'));
    root.append(intro, appNav(app));
    const catalog = el('div');
    catalog.id = 'guided-catalog';
    const last = tasks[app].find(task => task.id === state.last[app]);
    if (last && progress(app, last).done.length < last.steps.length) {
      const record = progress(app, last);
      const resume = el('section', 'guided-resume');
      resume.append(el('p', 'tutorial-eyebrow', 'PICK UP WHERE YOU LEFT OFF'), el('h2', '', last.title), el('p', '', record.done.length + ' of ' + last.steps.length + ' steps ticked off. No rush.'));
      resume.append(link('Continue task', path(app, last, record.cursor), 'guided-primary'));
      catalog.append(resume);
    }
    const search = el('div', 'guided-search');
    const label = el('label', '', 'What would you like to do in ' + apps[app].name + '?');
    label.htmlFor = 'guided-search';
    const input = el('input');
    input.id = 'guided-search';
    input.type = 'search';
    input.placeholder = app === 'zone-sketch' ? 'Try delete, rooms or loops' : app === 'jobs' ? 'Try assets, tests or certificates' : 'Try manuals, panels or quizzes';
    input.autocomplete = 'off';
    input.setAttribute('aria-controls', 'guided-categories');
    search.append(label, input);
    catalog.append(search);
    const categories = el('div', 'guided-categories');
    categories.id = 'guided-categories';
    const groups = [...new Set(tasks[app].map(task => task.group))];
    const groupNodes = [];
    for (const [index, group] of groups.entries()) {
      const details = el('details', 'guided-group');
      details.open = index === 0;
      const summary = el('summary');
      const list = tasks[app].filter(task => task.group === group);
      summary.append(el('span', '', group), el('small', '', list.length + (list.length === 1 ? ' task' : ' tasks')));
      const grid = el('div', 'guided-task-grid');
      const cards = [];
      for (const task of list) {
        const record = progress(app, task);
        const done = record.done.length === task.steps.length;
        const card = link('', path(app, task, done ? 'done' : record.cursor), 'guided-task');
        card.dataset.taskId = task.id;
        const status = done ? 'Completed' : record.done.length ? record.done.length + ' steps done' : index === 0 && cards.length === 0 ? 'Start here' : 'Guided task';
        card.append(el('span', 'guided-task-status', status), el('h3', '', task.title), el('p', '', task.goal), el('small', '', task.steps.length + ' small steps'));
        cards.push({card, text: [task.title, task.goal, task.group, ...task.steps.map(step => step.title + ' ' + step.instruction)].join(' ').toLowerCase()});
        grid.append(card);
      }
      details.append(summary, grid);
      categories.append(details);
      groupNodes.push({details, cards, defaultOpen: index === 0});
    }
    const empty = el('div', 'guided-empty');
    empty.hidden = true;
    empty.append(el('p', '', 'No matching tasks. Try a shorter word, or browse the categories below.'));
    const clear = button('Clear search', 'clear-search');
    clear.addEventListener('click', () => { input.value = ''; input.dispatchEvent(new Event('input')); input.focus(); });
    empty.append(clear);
    input.addEventListener('input', () => {
      const query = input.value.trim().toLowerCase();
      let count = 0;
      for (const group of groupNodes) {
        let matches = 0;
        for (const item of group.cards) {
          item.card.hidden = Boolean(query) && !query.split(/\s+/).every(word => item.text.includes(word));
          if (!item.card.hidden) matches++;
        }
        group.details.hidden = matches === 0;
        group.details.open = query ? matches > 0 : group.defaultOpen;
        count += matches;
      }
      empty.hidden = count !== 0;
      announce(query ? count + ' matching tasks' : 'All task categories shown');
    });
    catalog.append(categories, empty);
    const utility = el('div', 'guided-utility');
    utility.append(storageNote(), referenceLink(app));
    catalog.append(utility);
    root.append(catalog);
    if (focus) focusHeading(heading);
  }
  function player(app, task, stepIndex, focus) {
    const record = progress(app, task);
    const complete = record.done.length === task.steps.length;
    const requestedEnd = stepIndex === 'done';
    if (requestedEnd && !complete) stepIndex = task.steps.findIndex(step => !record.done.includes(step.id));
    const box = el('div');
    box.id = 'guided-player';
    const top = el('div', 'guided-player-top');
    const backToTasks = link('All tasks', path(app));
    backToTasks.dataset.action = 'tasks';
    const practice = link('Open app', apps[app].url);
    practice.target = '_blank';
    practice.rel = 'noopener noreferrer';
    practice.setAttribute('aria-label', 'Open ' + apps[app].name + ' browser app in a new tab');
    top.append(backToTasks, practice);
    box.append(top);
    const title = el('header', 'guided-task-heading');
    title.append(el('p', 'tutorial-eyebrow', apps[app].name.toUpperCase() + ' / GUIDED TASK'), el('h1', '', task.title));
    box.append(title);
    if (requestedEnd && complete) {
      const end = el('section', 'guided-complete');
      end.id = 'guided-complete';
      const heading = el('h2', '', 'Task complete. Nicely done.');
      end.append(heading, el('p', '', 'You ticked off all ' + task.steps.length + ' steps. Stop here, or choose another small task.'));
      const actions = el('div', 'guided-complete-actions');
      actions.append(link('Choose another task', path(app), 'guided-primary'), link('Review the steps', path(app, task, 0)));
      end.append(actions);
      box.append(end);
      root.append(box);
      if (focus) focusHeading(heading);
      announce(task.title + ': all steps completed.');
    } else {
      stepIndex = Math.max(0, Math.min(task.steps.length - 1, stepIndex));
      remember(app, task, stepIndex);
      const step = task.steps[stepIndex];
      const label = el('p', 'guided-progress-label', 'Step ' + (stepIndex + 1) + ' of ' + task.steps.length);
      const meter = el('progress');
      meter.max = task.steps.length;
      meter.value = record.done.length;
      meter.setAttribute('aria-label', record.done.length + ' of ' + task.steps.length + ' steps ticked off');
      box.append(label, meter);
      const card = el('section', 'guided-step');
      const heading = el('h2', '', step.title);
      heading.id = 'guided-step-title';
      card.setAttribute('aria-labelledby', heading.id);
      card.append(heading, el('p', 'guided-instruction', step.instruction));
      if (step.check) {
        const check = el('p', 'guided-check');
        check.append(el('strong', '', 'Look for: '), document.createTextNode(step.check));
        card.append(check);
      }
      if (step.image) {
        const figure = el('figure', 'guided-example');
        const shot = link('', step.image.src, 'screenshot-link');
        shot.dataset.caption = step.image.caption || step.image.alt;
        shot.setAttribute('aria-label', 'Enlarge example: ' + step.image.alt);
        const image = el('img');
        image.src = step.image.src;
        image.alt = step.image.alt;
        image.decoding = 'async';
        shot.append(image, el('span', 'guided-image-label', 'Tap to enlarge example'));
        figure.append(shot);
        if (step.image.caption) figure.append(el('figcaption', '', step.image.caption));
        card.append(figure);
      }
      if (step.hint) {
        const help = el('details', 'guided-hint');
        help.append(el('summary', '', 'Need a hand?'), el('p', '', step.hint));
        card.append(help);
      }
      box.append(card);
      const actions = el('div', 'guided-step-actions');
      const back = button('Back', 'back');
      back.disabled = stepIndex === 0;
      back.addEventListener('click', () => navigate(path(app, task, stepIndex - 1)));
      const next = button(stepIndex === task.steps.length - 1 ? 'Done, finish task' : 'Done, next', 'next');
      next.className = 'guided-primary';
      next.addEventListener('click', () => {
        const current = progress(app, task);
        if (!current.done.includes(step.id)) current.done.push(step.id);
        state.tasks[app + '/' + task.id] = current;
        const nextIndex = stepIndex + 1 < task.steps.length ? stepIndex + 1 : task.steps.findIndex(item => !current.done.includes(item.id));
        remember(app, task, nextIndex >= 0 ? nextIndex : stepIndex);
        navigate(path(app, task, nextIndex < 0 ? 'done' : nextIndex));
      });
      actions.append(back, next);
      box.append(actions);
      const list = el('details', 'guided-step-list');
      list.append(el('summary', '', 'See the ' + task.steps.length + ' steps'));
      const ol = el('ol');
      task.steps.forEach((item, index) => {
        const li = el('li');
        const jump = link(item.title, path(app, task, index));
        if (index === stepIndex) jump.setAttribute('aria-current', 'step');
        li.append(jump, el('small', '', record.done.includes(item.id) ? 'Done' : index === stepIndex ? 'You are here' : 'To do'));
        ol.append(li);
      });
      list.append(ol);
      box.append(list);
      root.append(box);
      if (focus) focusHeading(heading);
      announce('Step ' + (stepIndex + 1) + ' of ' + task.steps.length + ': ' + step.title);
    }
    const links = el('div', 'guided-player-links');
    links.append(referenceLink(app, task));
    const restart = button('Restart this task', 'restart');
    restart.addEventListener('click', () => {
      state.tasks[app + '/' + task.id] = {done: [], cursor: 0};
      state.last[app] = task.id;
      save();
      navigate(path(app, task, 0));
    });
    links.append(restart);
    box.append(links, el('p', 'guided-practice-note', 'Practise in the app, then tap Done here. These ticks only track your learning. Use a practice site or example data.'), storageNote());
  }
  function render(focus = false) {
    let hash;
    try { hash = decodeURIComponent(location.hash.slice(1)); } catch { hash = ''; }
    const guided = !hash || hash === 'tutorial-main' || hash.startsWith('learn/');
    root.hidden = !guided;
    reference.hidden = guided;
    returnLink.hidden = guided;
    document.body.classList.toggle('is-guided-tutorial', guided);
    if (!guided) {
      const target = document.getElementById(hash);
      const app = target?.closest('.tutorial-guide')?.id || 'zone-sketch';
      returnLink.href = path(app);
      if (target && focus) requestAnimationFrame(() => target.scrollIntoView({block: 'start'}));
      return;
    }
    const [, requestedApp, taskId, requestedStep] = hash.split('/');
    const app = Object.hasOwn(apps, requestedApp) ? requestedApp : 'zone-sketch';
    root.dataset.app = app;
    root.replaceChildren();
    const task = tasks[app].find(item => item.id === taskId);
    if (!task) catalog(app, focus);
    else {
      const step = requestedStep === 'done' ? 'done' : /^\d+$/.test(requestedStep || '') ? Math.min(task.steps.length - 1, Math.max(0, Number(requestedStep) - 1)) : progress(app, task).cursor;
      player(app, task, step, focus);
    }
  }
  let referenceWasHidden = false;
  window.addEventListener('beforeprint', () => {
    referenceWasHidden = reference.hidden;
    reference.hidden = false;
  });
  window.addEventListener('afterprint', () => { reference.hidden = referenceWasHidden; });
  window.addEventListener('hashchange', () => render(true));
  render(false);
})();
