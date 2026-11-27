# Sources for the 27 November App Hub news update

## FINDR web 0.43.1

The Home implementation is committed to [FINDR source `6017eb0`](https://github.com/william2535/Findr/commit/6017eb00d89a59a4cb3a77a63dd4a94b6cb675f5), with native Site source `38f05293b65499a6fb4265bfc3c34aa34b3dc4aa`. It was prepared from the verified web 0.43.0 baseline (GitHub `c3c31a3016e7a811b2f88277e1430d571ee2ae04`, native Site source `4c6f09febc768852facb025496818ee0611c1fee`). Site version 97 deployed successfully on 27 November 2026 at 16:27:54 UTC (deployment `appgdep_6b09af7a215c8191827e5d6da6888d85`). GitHub Pages workflow [46033638643](https://github.com/william2535/Findr/actions/runs/46033638643) succeeded for source `6017eb00d89a59a4cb3a77a63dd4a94b6cb675f5` before this news update. This is a website release; no new APK or Play Store rollout is announced.

The update concerns `public/app/app.mjs` Home rendering and `public/app/home-view.css` / `home-view.mjs`. It reorganises existing actions rather than introducing new diagnostic, AI or download functionality.

- A single compact welcome replaces stacked feature promotions.
- Consistent daily shortcuts retain the established Panel Pals, Panel Lab, Emulators, Menu maps, panel-download and Quizzes routes.
- Manual pack shortcuts and Toolbox remain available, alongside the saved detailed/compact preference.
- App-update and offline utilities are grouped together. Installation and About disclosures are no longer forced open in detailed mode.
- Existing manuals, conversations and diagnostic evidence retain their existing storage; this release is not a data migration or new Android build.

The existing 26 November FINDR, Jobs and App Hub posts and the 24 November Jobs post are retained byte-for-byte.

## Checks supplied before publication

The release owner reports a successful production build and public-asset gate (1,559 files, 168,088,643 bytes), TypeScript validation, and the full Node suite: 2,083 passing tests, no failures and one pre-existing skip for a missing original manufacturer-PDF fixture (2,084 tests total).

Focused browser checks use Chromium 154 and WebKit 27 on Linux, with 12 online checks passing per engine. Chromium also passed all 14 offline checks after service-worker SHA-256 verification of build `f522586dca36`. WebKit completed the same 14 offline functional checks and verified the cached build, but its strict zero-browser-error gate failed on eight empty-stack “Context stopped” warnings during rapid reloads. The same eight warnings were reproduced on unchanged web 0.43.0, so this is recorded as an existing runtime warning rather than a clean offline-suite pass. No physical iPhone or iPad test is claimed.

The empty-library default phone Home height measured 5,004 CSS pixels before and 1,637 after in the tested viewport. This is a fixture-specific reduction, not a claim about every user's saved packs or expanded disclosures; the public news does not quote it.
