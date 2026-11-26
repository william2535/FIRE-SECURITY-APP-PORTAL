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
