/* The guide remains readable and screenshot links work when JavaScript is unavailable. */
(() => {
  'use strict';
  if (!document.body.classList.contains('tutorial-page')) return;

  const header = document.querySelector('.site-header');
  const chapters = [...document.querySelectorAll('.tutorial-chapter[id]')];
  const chapterLinks = [...document.querySelectorAll('.tutorial-toc a[href^="#"]')];
  const guides = [...document.querySelectorAll('.tutorial-guide[id]')];
  const guideLinks = [...document.querySelectorAll('[data-guide-link]')];
  let scrollFrame = 0;

  const selectGuide = () => {
    let target = null;
    try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch { /* Invalid fragments fall back to the first guide. */ }
    const selected = target?.closest('.tutorial-guide') || guides.find(guide => !guide.hidden) || guides[0];
    const revealing = selected?.hidden;
    for (const guide of guides) guide.hidden = guide !== selected;
    for (const link of guideLinks) {
      if (link.dataset.guideLink === selected?.id) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
    if (revealing && target) requestAnimationFrame(() => target.scrollIntoView({block: 'start'}));
    queueChapter();
  };

  const activeChapter = () => {
    scrollFrame = 0;
    if (document.getElementById('tutorial-reference')?.hidden) return;
    const visibleChapters = chapters.filter(chapter => !chapter.closest('.tutorial-guide')?.hidden);
    if (!visibleChapters.length) return;
    const threshold = (header?.getBoundingClientRect().height || 0) + 40;
    let active = visibleChapters[0];
    for (const chapter of visibleChapters) {
      if (chapter.getBoundingClientRect().top <= threshold) active = chapter;
      else break;
    }
    for (const link of chapterLinks) {
      if (link.hash === '#' + active.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };
  const queueChapter = () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(activeChapter);
  };
  const measureHeader = () => {
    const height = Math.ceil(header?.getBoundingClientRect().height || 0);
    document.body.style.setProperty('--tutorial-header-height', height + 'px');
    document.documentElement.style.scrollPaddingTop = (height + 20) + 'px';
    queueChapter();
  };
  if (header && 'ResizeObserver' in window) new ResizeObserver(measureHeader).observe(header);
  window.addEventListener('resize', measureHeader, {passive: true});
  window.addEventListener('scroll', queueChapter, {passive: true});
  window.addEventListener('hashchange', selectGuide);
  selectGuide();
  measureHeader();

  for (const link of chapterLinks) {
    link.addEventListener('click', () => {
      const jump = link.closest('.tutorial-jump');
      if (jump) jump.open = false;
      const chapter = document.getElementById(link.hash.slice(1));
      if (!chapter) return;
      requestAnimationFrame(() => {
        const previous = chapter.getAttribute('tabindex');
        chapter.setAttribute('tabindex', '-1');
        chapter.focus({preventScroll: true});
        chapter.addEventListener('blur', () => {
          if (previous === null) chapter.removeAttribute('tabindex');
          else chapter.setAttribute('tabindex', previous);
        }, {once: true});
      });
    });
  }

  let printOpened = [];
  let printHiddenGuides = [];
  window.addEventListener('beforeprint', () => {
    printHiddenGuides = guides.filter(guide => guide.hidden);
    for (const guide of printHiddenGuides) guide.hidden = false;
    printOpened = [...document.querySelectorAll('.tutorial-faq:not([open])')];
    for (const item of printOpened) item.open = true;
  });
  window.addEventListener('afterprint', () => {
    for (const item of printOpened) item.open = false;
    printOpened = [];
    for (const guide of printHiddenGuides) guide.hidden = true;
    printHiddenGuides = [];
    queueChapter();
  });

  const viewer = document.getElementById('screenshot-viewer');
  const image = document.getElementById('screenshot-image');
  const caption = document.getElementById('screenshot-caption');
  const close = document.getElementById('screenshot-close');
  const size = document.getElementById('screenshot-size');
  const stage = viewer?.querySelector('.screenshot-stage');
  if (!viewer || !image || !caption || !close || !stage || typeof viewer.showModal !== 'function') return;

  let returnFocus = null;
  let backdropPress = false;
  viewer.setAttribute('aria-labelledby', 'screenshot-caption');
  stage.setAttribute('tabindex', '0');
  stage.setAttribute('role', 'region');
  stage.setAttribute('aria-label', 'Screenshot. Scroll to inspect the enlarged image.');

  const fitImage = () => {
    viewer.classList.remove('is-zoomed');
    stage.scrollLeft = stage.scrollTop = 0;
    if (size) {
      size.textContent = 'Zoom in';
      size.setAttribute('aria-pressed', 'false');
    }
  };
  const closeViewer = () => { if (viewer.open) viewer.close(); };
  close.addEventListener('click', closeViewer);
  if (size) size.addEventListener('click', () => {
    const zoomed = viewer.classList.toggle('is-zoomed');
    size.textContent = zoomed ? 'Fit image' : 'Zoom in';
    size.setAttribute('aria-pressed', String(zoomed));
    stage.scrollLeft = stage.scrollTop = 0;
  });
  // A drag from inside the image to the backdrop must not dismiss the picture.
  const outside = event => {
    const box = viewer.getBoundingClientRect();
    return event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
  };
  viewer.addEventListener('pointerdown', event => { backdropPress = event.target === viewer && outside(event); });
  viewer.addEventListener('pointercancel', () => { backdropPress = false; });
  viewer.addEventListener('click', event => {
    if (backdropPress && event.target === viewer && outside(event)) closeViewer();
    backdropPress = false;
  });
  // Native dialog supplies Escape dismissal, modal focus containment and inert background content.
  viewer.addEventListener('close', () => {
    document.body.classList.remove('screenshot-viewer-open');
    fitImage();
    image.removeAttribute('src');
    if (returnFocus?.isConnected) returnFocus.focus({preventScroll: true});
    returnFocus = null;
  });
  document.addEventListener('click', event => {
    const link = event.target.closest('a.screenshot-link[href]');
    if (!link) return;
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    returnFocus = link;
    caption.textContent = link.dataset.caption || link.closest('figure')?.querySelector('figcaption')?.textContent || link.querySelector('img')?.alt || 'Screenshot';
    image.alt = link.querySelector('img')?.alt || caption.textContent;
    image.src = link.href;
    fitImage();
    viewer.showModal();
    document.body.classList.add('screenshot-viewer-open');
    close.focus();
  });
})();
