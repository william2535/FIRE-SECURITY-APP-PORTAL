# Fire & Security App Portal

Standalone GitHub Pages website for Zone Sketch, Jobs, FINDR and Manual Archives.

## Publishing
In Settings → Pages, select Deploy from branch `main`, folder `/ (root)`.

## Updating
Edit `index.html` for links and content, `styles.css` for design. Experimental Zone Sketch and Jobs remain unlinked until separate deployments are verified. No existing application repositories are modified.

## Tutorials
The header's **Tutorials** tab opens `tutorials.html`, with a 16-chapter Zone Sketch guide, a 14-chapter Jobs guide and a 19-chapter FINDR guide on the same page. App choices and chapter links support direct URL fragments; the original Zone Sketch links remain valid. Edit that file for instructions, `tutorials.css` for the guide and responsive navigation, and `tutorials.js` for chapter navigation, printing and the screenshot viewer. The existing app cards and their destination links stay in `index.html`.

Screenshots are local assets in `assets/tutorials/zone-sketch/`, `assets/tutorials/jobs/` and `assets/tutorials/findr/`. See `assets/tutorials/README.md` for their source and update process. Keep the guide's version/date and button names in step with the app when refreshing it.

### Browser checks
Run from the repository root with Node.js and Playwright available:

```sh
npm install --no-save --package-lock=false playwright
npx playwright install --with-deps chromium webkit
node tests/tutorials.cjs
BROWSER=webkit node tests/tutorials.cjs
```

The checks start their own local server and cover 320, 390, 768 and 1440 px viewports, all three app guides, direct chapter links, browser history, all images, touch/keyboard screenshot controls, no-JavaScript links, print visibility/restoration and the existing Info, installation and Update controls. External app previews are isolated so the suite tests this hub independently of their availability. Nothing is deployed by these checks.
