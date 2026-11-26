# App Hub responsive layout verification

Checked on 26 November 2026 against the portal source based on commit `f377197`.

## Changes

- The compact application section now uses two columns from 701–1099px, with Jobs spanning the next row, and three balanced columns from 1100px upwards.
- Card artwork keeps its full proportions instead of cropping in a tall tablet card.
- Google Play banners no longer grow to fill nearly the whole tablet screen width.
- Phone artwork keeps its existing appearance; its linked button areas are at least 44px high.
- The separate Information view remains one application per row. Existing destinations, content, artwork and access policies are unchanged.

These changes are scoped in `responsive-layout.css`, loaded after the existing tablet overrides in `index.html`.

## Browser checks

The portable `tests/responsive-layout.cjs` harness serves the repository on a temporary local port and checks these CSS viewport sizes:

| Width × height | Layout |
| --- | --- |
| 320 × 700 | Small phone |
| 390 × 844 | Phone |
| 768 × 1024 | Tablet portrait |
| 820 × 1180 | Tablet portrait |
| 1024 × 768 | Tablet landscape |
| 1366 × 1024 | Large tablet / desktop |
| 1440 × 1000 | Desktop |

It verifies header and preview bounds, zero horizontal page overflow in compact and Information views, expected card columns, touch targets, unobstructed link centres, and actual clicks/taps opening the existing app destinations. It also rejects missing local assets and uncaught page errors. The 820px case uses ordinary motion; the others request reduced motion.

The harness isolates independent hosted app frames and external images. It tests the portal's containers and links, not the functionality of the separately hosted applications. Local promotional artwork is loaded normally.

### Commands

With Playwright and its browsers available:

```sh
node tests/responsive-layout.cjs
BROWSER=webkit node tests/responsive-layout.cjs
```

To use an existing browser installation, set `BROWSER_EXECUTABLE` for Chromium or `WEBKIT_EXECUTABLE` for a compatible WebKit wrapper. `RESPONSIVE_EVIDENCE_DIR` optionally saves screenshots and JSON measurements outside the repository.

### Results

- Chromium **154.0.8037.57**, Debian GNU/Linux 13 headless: focused responsive checks passed at all seven sizes.
- WebKit **26.0**, Linux headless through the existing compatible wrapper: focused responsive checks passed at all seven sizes. The full tutorial suites were not repeated in WebKit for this layout change.
- The existing `tests/tutorials.cjs` suite passed in Chromium at 320, 390, 768 and 1440px, including navigation, all three guides, deep links/history, screenshot zoom/focus, app-update URL and asset refresh, no-JavaScript guides, and print state restoration.
- The existing `tests/guided-tutorials.cjs` suite passed in Chromium at 320, 390 and 1440px, including saved progress, resume/restart, completion, references, blocked storage and no-JavaScript fallback.
- `node --check tests/responsive-layout.cjs` and `git diff --check` passed.

## Limits

No physical iPad or iPhone was available. Desktop browser viewport and touch emulation cannot verify device-specific Safari behavior, memory limits or browser chrome. The independently hosted apps were not exercised inside the preview frames. Their existing loading behavior was not changed.
