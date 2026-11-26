# Sources for the 26 November App Hub news update

The existing `updates.html` post is dated 24 November 2026 and was introduced at `d75819a27be607036db1175c10610d972a049fe4`, 16:39:06 UTC. It remains intact. The new entries cover work since that point and distinguish website changes from APK/Play Store publication.

## Jobs

The deployed website comes from `release/jobs-android`, not the older `feat/offline-jobs-mvp` or default `main` branch. Before this tablet update, Pages run [45813297340](https://github.com/william2535/Jobs/actions/runs/45813297340) successfully published `1223986cf3151895c9fa9ae93ebf4a94c408e107` on 26 November. This is a website deployment, not evidence of a new signed Android release.

Verified existing changes since the last post:

- [c41ef0b](https://github.com/william2535/Jobs/commit/c41ef0bbb3226f0a92052797a3c43f6762ce280a): local site and standalone-job profile pictures.
- [7b97323](https://github.com/william2535/Jobs/commit/7b973232d6774634e1f8d4a18592f3b7c6dd0ba6): PDF and editable Jobs job-pack export.
- [0edf728](https://github.com/william2535/Jobs/commit/0edf728bfe0ce3e6e00326bcae9d27aad04d1ece) and [ff43e43](https://github.com/william2535/Jobs/commit/ff43e439440d28906442ae456c53886ba4f9fb05): Quick Transfer and starting/finishing work from received packs.
- [c7ec1ff](https://github.com/william2535/Jobs/commit/c7ec1ff8e1babe445d642650559b580826994578): engineer-only backgrounds and photo controls, separated from customer documents.
- [b0cca89](https://github.com/william2535/Jobs/commit/b0cca890085f3006203ecdf630a18a11571e5654) and [3e52e16](https://github.com/william2535/Jobs/commit/3e52e16fe125edb7a6e767659522ff2c6e082379): expanded fire-certificate templates and combined PDF packs of selected issued certificates. The news does not claim certification, independent approval or compliance based on template completion.

The new tablet spacing, shared banners and save-offline swipe-dismiss lines describe Jobs web 1.1.1. Its 340 unit/DOM tests, production release gate and focused Chromium 154 / WebKit 27.2 layout, recovery and offline checks passed. Publication of this news is paired with that website release. The preceding tablet attempt's Verify Jobs run failed a WebKit resize test while its unit tests, build and release gate passed. That test still assumes a desktop sidebar at 1,280px even though the new coarse-pointer query keeps touch devices in tablet layout through 1,366px. The resize test now uses the actual tablet/desktop boundary; the earlier failed run is not counted as a successful suite.

## FINDR

- [6a3752c](https://github.com/william2535/Findr/commit/6a3752cbb7974e1a7aabd2db915cbf41ef6dac91): FINDR web 0.41.0, Panel Lab matrix builder/simulator, seven generic matrix challenges, ten manual-backed panel lessons, local persistence, Home refresh and sparks.
- [c4ee439](https://github.com/william2535/Findr/commit/c4ee4397bc36642a0621c2ea9ff079455de13d7b): verified publication and source manifest.
- [95ac61a](https://github.com/william2535/Findr/commit/95ac61a58420bcf77a36405f9c9365d954e7a1b0), 25 November 20:54 UTC: 41 reviewed Paxton device records/pictures, 35 linked document records and one device pack. This is after the previous news post. Linked documents still need downloading; the news does not say all PDF bytes are preinstalled or establish blanket device compatibility.

## App Hub

- [a2c084c](https://github.com/william2535/FIRE-SECURITY-APP-PORTAL/commit/a2c084ca721d7d415b15f67c6d7dd28b9219fd19): tablet archive overlap, spacing and browser-app links.
- [f377197](https://github.com/william2535/FIRE-SECURITY-APP-PORTAL/commit/f37719708ba2981d38ab728ff6b410b531647a00): visible/tappable Jobs browser launch in tablet and list layouts.
- The new iPad polish passed focused responsive checks in Chromium 154 and WebKit 26 at seven phone/tablet/desktop widths; the existing Chromium tutorial suites also passed.

## Deliberate exclusion

Zone Sketch's `7468031783e86267bc87d0d9bab73d780dde7933` adds a searchable symbol library in source. Its public Pages homepage still shows the beta closure, and its Android/four-system workflows did not complete successfully. It is therefore omitted from the published-feature news rather than represented as an available new app release.

## Same-day Jobs 1.1.2 follow-up

The Jobs entry now includes opaque black dark-mode surfaces and fading blue banner accents. This is a website styling update on the same release branch; the ordinary light palette, save/recovery flow and content colours are preserved. Battery savings are not quantified or promised. The detailed release checks are recorded in Jobs `docs/black-theme-1.1.2.md`.


## Same-day FINDR 0.42.0 follow-up

The new news entry describes the bounded Protec 6500 learning exercise in FINDR `public/app/protec-loop-engine.mjs` and `public/app/protec-loop-lab.mjs`, with its source audit in `research/protec6500-loop-lab/SOURCE-AUDIT.md`. This entry accompanies FINDR web 0.42.0 source commit [9537e0f](https://github.com/william2535/Findr/commit/9537e0fc78d6864c9cacb4e9ce90a027568478cf), verified before this news update. No Android release is claimed.

- The three implemented scenarios are **Mapped loop**, **Intermittent replies** and **Incomplete map**. Their survey, virtual section controls and per-device readings are synthetic training data, not readings from installed equipment.
- Map groups are approximate isolator-based positions. Tied or missing Map values do not establish cable order; the exercise supplies a separate fictional survey where an exact route is needed.
- Each observation advances one simulated hour. The exercise compares repeated equal windows and polling coverage, keeps previous snapshots when counters reset, and requires a restored whole-loop observation before completion. Lower totals, a quiet window or a completed lesson do not confirm a repair.
- Runtime menu citations identify **Protec Algo-Tec 6500/6600 Commissioning Manual RDM0002/2_4**, dated 11 December 2017, existing Manual Archives record `protec-aee99ea8ed2b`; checked references include allocation/Map at PDF p10 and Loop Info at PDF pp20–21. The source audit also records X600 map-node definitions. Current firmware parity is not claimed.
- Hints, autosaved exercise state, evidence-log export and restoration checks are present in the implementation. The news does not promise a complete 6500 emulator, a real “Split Loop” menu, a live panel connection, preinstalled PDF bytes or commissioning approval.

The new entry links directly to `https://william2535.github.io/Findr/app/#panel-lab/loops`. Existing Jobs 1.1.2, FINDR 0.41.0 and other news entries remain unchanged.


## FINDR 0.43.0 follow-up

This entry accompanies FINDR web 0.43.0 source commit [fbce139](https://github.com/william2535/Findr/commit/fbce139244d0ba25dd9fb783a2f0582fadb9b231). The Site 96 deployment succeeded at 22:54 UTC on 26 November 2026 before this news publication. This does not announce an Android release. Browser verification used Chromium 154 and WebKit 27.2, including offline checks and a synthetic OCR fixture; physical-device photographs have not yet been verified.

The source inspected is the implementation in `public/app/loop-field-log.mjs`, `loop-field-model.mjs`, `loop-field-store.mjs`, `loop-photo-import.mjs` and `loop-photo-parser.mjs`, integrated by `public/app/panel-lab.mjs`. The evidence review is `research/loop-field-0.43.0/field-evidence-scope.md`.

- **Site investigation** is an engineer-entered evidence record, reached through **Panel Lab → Loop diagnostics → Site investigation**. The direct route is `#panel-lab/loop-log`; `#panel-lab/loops` continues to open the separate synthetic Practise exercise. Multiple site jobs keep their own equipment identity, observations, photos and saved history.
- Photo OCR runs locally using the installed OCR resources. Proposed rows require review against the original image and explicit confirmation before they become confirmed devices. An OCR confidence score is not confirmation. Unreadable or partial rows remain subject to manual review.
- Map groups remain distinct from site-confirmed physical sections. The existing Protec source limitations still apply: tied or missing Map values do not establish exact cable order.
- The log records actual entered missed-reply counters, reset state, time interval, checked operating conditions and device coverage. Optional observed polls require their own source and definition; the app must not invent polling totals or treat a smaller counter as proof of repair.
- Corrections retain history and flag affected observations for review. Impairments remain in the handover until restoration evidence is recorded. JSON export includes the evidence record and handover, but explicitly excludes photo-file bytes; original photos remain locally stored.
- Offline capability depends on a cached app shell and downloaded OCR resources. The news does not claim an online model, live panel telemetry or control, a complete panel emulator, automatic cause confirmation, or a new native APK.

The existing FINDR 0.42.0, FINDR 0.41.0, Jobs 1.1.2 and other news entries are preserved unchanged.
