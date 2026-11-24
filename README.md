# Fire & Security App Portal

Standalone GitHub Pages website for Zone Sketch, Jobs, FINDR and Manual Archives.

## Publishing
In Settings → Pages, select Deploy from branch `main`, folder `/ (root)`.

## Updating
Edit `index.html` for links and content, `styles.css` for design. Experimental Zone Sketch and Jobs remain unlinked until separate deployments are verified. No existing application repositories are modified.

## Tutorials
The header's **Tutorials** tab opens short guided tasks for Zone Sketch, Jobs and FINDR. Choose an app, search or browse a task category, then follow one action at a time. **Done, next** records a self-reported learning step; opening a step or jumping ahead never marks it complete. Progress saves locally and a Continue card resumes an unfinished task. This does not read or change any data in the actual apps. If browser storage is unavailable, tasks still work for the current page session.

Edit `tutorial-tasks-zone.js`, `tutorial-tasks-jobs.js` and `tutorial-tasks-findr.js` for the curated task content. Each task has a stable ID, group, goal, optional reference chapter and ordered steps with stable IDs, a short instruction, expected result and optional hint/screenshot. Keep tasks small and split longer workflows into separate goals. Use real app screenshots and verified control names. `guided-tutorials.js` handles search, progress and routing; `guided-tutorials.css` styles the task interface. Guided links use `#learn/<app>/<task>/<step>` with one-based step numbers. The local-storage key is `hub-tutorial-progress-v1`; changing task/step IDs discards the matching old progress.

The complete 16-chapter Zone Sketch, 14-chapter Jobs and 19-chapter FINDR references remain in `tutorials.html`. Original chapter links still open their full explanations, and all references remain readable without JavaScript or when task data fails to load. Printing includes the complete reference. Edit `tutorials.css` for reference styles and `tutorials.js` for chapter navigation, printing and the shared screenshot viewer. The existing app cards and their destination links stay in `index.html`.

Screenshots are local assets in `assets/tutorials/zone-sketch/`, `assets/tutorials/jobs/` and `assets/tutorials/findr/`. See `assets/tutorials/README.md` for their source and update process. Keep the guide's version/date and button names in step with the app when refreshing it.

### Browser checks
Run from the repository root with Node.js and Playwright available:

```sh
npm install --no-save --package-lock=false playwright
npx playwright install --with-deps chromium webkit
node tests/tutorials.cjs
BROWSER=webkit node tests/tutorials.cjs
node tests/guided-tutorials.cjs
BROWSER=webkit node tests/guided-tutorials.cjs
```

The checks start their own local server and cover phone, tablet and desktop layouts; guided search, task progress, skipping, completion, restart and resume; all three full references; direct links and browser history; images and touch/keyboard screenshot controls; unavailable storage; no-JavaScript links; print visibility/restoration; and the existing Info, installation and Update controls. External app previews are isolated so the suite tests this hub independently of their availability. Nothing is deployed by these checks.
