# Tutorial assets

These are screenshots of the actual Zone Sketch interface using a made-up **Tutorial practice site**, not mockups or customer drawings. They were captured at a 430 × 932 CSS-pixel phone viewport with device scale factor 2, then encoded as WebP. The New project and project-card images are cropped to the relevant interface. The other screenshots retain the whole viewport.

## Source checked

- `william2535/FIRE-ZONE-PLAN-APP`, commit `5965d78` (v0.64), `index.html` SHA-256 `e607ca3c45f9fe5ddb2fedabb208aeefcb9cdee06cea4f072d4e672a0bdb5022`.
- The hub-linked `william2535/ZoneSketch-Unstable` at `6cdfb7f` has the same controls; its HTML differs in the page title and dismissible unstable-build warning.
- `zone-sketch-icon.webp` is the app's existing `assets/on-site-zone-planner-icon.webp`.

No app source or deployment settings were changed to produce this guide. The screenshots were captured from a local copy of the application.

## Screenshot inventory

| File | Actual view |
| --- | --- |
| `01-new-project.webp` | Named Fire project, Fresh install selected |
| `02-workspace.webp` | Building layout popup: shapes and Quick room names |
| `03-quick-rooms.webp` | Outer walls and two internal walls in the workspace |
| `04-room-labels.webp` | Office, Store and Corridor labels |
| `05-doors.webp` | Placed doors and Objects popup |
| `06-delete-before.webp` | Extra practice wall highlighted red during a held delete gesture |
| `07-delete-after.webp` | Same wall removed after release, Undo available |
| `08-devices.webp` | Survey device library |
| `08-device-placement.webp` | Fire panel, two Smoke detectors and one Heat detector |
| `09-device-properties.webp` | Selected device properties with manual reference Z1-01 |
| `10-circuit-setup.webp` | Fire circuit setup |
| `11-circuit-route.webp` | Completed conventional route with three connected devices |
| `12-completed-drawings.webp` | Three completed-step cards and the enlarged As-fit drawing |
| `13-project-backup.webp` | Home project-card actions |
| `14-zone.webp` | Zone 1 over the practice building |

## Updating screenshots

1. Check the current app source and actual interface before changing instructions.
2. Serve a local app checkout and create a disposable practice project. Keep real customer data out of captures.
3. Draw the rooms, place devices and perform the relevant interaction in the app. Capture actual UI states; do not redraw controls or invent results in an image editor.
4. For Delete, capture both the held red preview and the result after release. Check that Undo restores the object and Redo removes it again.
5. For circuits, route through the practice devices and check completion before capturing. Check the completed drawings and export an editable backup to confirm the project data.
6. Update WebP files, image dimensions, alt text, captions, this source record and the version/date in `tutorials.html`. Keep images legible when enlarged and small enough for mobile loading.
7. Run the Chromium and WebKit checks described in the root README, then inspect the phone and desktop page visually.
