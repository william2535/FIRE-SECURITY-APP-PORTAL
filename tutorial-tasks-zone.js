window.TutorialTasks = window.TutorialTasks || {};
window.TutorialTasks['zone-sketch'] = [
  {
    "id": "create-practice-project",
    "title": "Create a practice project",
    "group": "Get started",
    "goal": "Open a separate Fire project for practice.",
    "reference": "start",
    "steps": [
      {
        "id": "open-new-project",
        "title": "Open New project",
        "instruction": "On Home, tap Make a new plan.",
        "check": "The New project dialog opens.",
        "image": {
          "src": "assets/tutorials/zone-sketch/01-new-project.webp",
          "alt": "New project dialog showing Fire, Fresh install and Additional work.",
          "caption": "Choose a system and work type before creating the project."
        }
      },
      {
        "id": "name-project",
        "title": "Name the project",
        "instruction": "Enter Tutorial practice site in the project/site name box.",
        "check": "The practice name is visible."
      },
      {
        "id": "choose-fire",
        "title": "Choose Fire",
        "instruction": "Tap the Fire card.",
        "check": "Fire is selected."
      },
      {
        "id": "choose-fresh-install",
        "title": "Choose Fresh install",
        "instruction": "Leave Fresh install selected for this first drawing.",
        "check": "Fresh install has the selected border."
      },
      {
        "id": "create-project",
        "title": "Create the project",
        "instruction": "Tap the green Create button.",
        "check": "An empty drawing workspace opens."
      }
    ]
  },
  {
    "id": "pan-and-zoom",
    "title": "Move around the plan",
    "group": "Get started",
    "goal": "Change your view without changing the drawing.",
    "reference": "controls",
    "steps": [
      {
        "id": "show-controls",
        "title": "Show the controls",
        "instruction": "Tap Menu or the small top arrow if the controls are folded away.",
        "check": "The drawing controls are visible.",
        "image": {
          "src": "assets/tutorials/zone-sketch/03-quick-rooms.webp",
          "alt": "Practice building with an outer rectangle and internal walls.",
          "caption": "Building tools create editable walls."
        }
      },
      {
        "id": "enable-move",
        "title": "Turn Move ON",
        "instruction": "Tap Move until it shows Move ON.",
        "check": "Dragging will move the view."
      },
      {
        "id": "move-view",
        "title": "Pan or zoom",
        "instruction": "Drag to pan, or pinch with two fingers to zoom.",
        "check": "The view changes while the walls stay in place.",
        "hint": "In the layout workspace, turn Move ON before pinching. Survey supports two-finger navigation directly."
      },
      {
        "id": "fit-plan",
        "title": "Bring the plan back",
        "instruction": "Tap Fit.",
        "check": "The whole plan returns to view.",
        "hint": "Choose a drawing tool when you are ready to draw again."
      }
    ]
  },
  {
    "id": "draw-rooms-and-walls",
    "title": "Draw a room and divider",
    "group": "Building",
    "goal": "Make an outer room with one internal wall.",
    "reference": "quick-rooms",
    "steps": [
      {
        "id": "choose-box",
        "title": "Choose Building Box",
        "instruction": "Open Building, then choose Box.",
        "check": "The building Box tool is active.",
        "hint": "Zones → Box draws a coloured zone instead.",
        "image": {
          "src": "assets/tutorials/zone-sketch/02-workspace.webp",
          "alt": "Building layout menu with room shapes and Quick room names.",
          "caption": "Room shapes and room names are separate tools."
        }
      },
      {
        "id": "drag-room",
        "title": "Drag out the room",
        "instruction": "Press at one corner, drag diagonally to the opposite corner and release.",
        "check": "Editable wall lines surround the room."
      },
      {
        "id": "choose-wall",
        "title": "Choose Wall",
        "instruction": "Open Building and choose Wall.",
        "check": "The Wall tool is active."
      },
      {
        "id": "draw-divider",
        "title": "Draw the divider",
        "instruction": "Press on one wall, drag across the room and release on the opposite wall.",
        "check": "An internal wall divides the room.",
        "hint": "Use Undo immediately if the wall needs another attempt."
      }
    ]
  },
  {
    "id": "name-rooms",
    "title": "Name your rooms",
    "group": "Building",
    "goal": "Place readable names inside the layout.",
    "reference": "room-labels",
    "steps": [
      {
        "id": "find-room-names",
        "title": "Open Quick room names",
        "instruction": "Open Building and find Quick room names.",
        "check": "The room-name choices are visible.",
        "image": {
          "src": "assets/tutorials/zone-sketch/02-workspace.webp",
          "alt": "Building layout menu with room shapes and Quick room names.",
          "caption": "Room shapes and room names are separate tools."
        }
      },
      {
        "id": "choose-office",
        "title": "Choose a name",
        "instruction": "Tap Office.",
        "check": "Office is ready to place."
      },
      {
        "id": "place-label",
        "title": "Place the name",
        "instruction": "Tap inside the office.",
        "check": "Office appears on the plan.",
        "image": {
          "src": "assets/tutorials/zone-sketch/04-room-labels.webp",
          "alt": "Office, Store and Corridor labels inside the practice building.",
          "caption": "Place names where they do not cover doors or devices."
        }
      },
      {
        "id": "place-other-name",
        "title": "Add another name",
        "instruction": "Choose Store, Corridor or Custom… for the next room, then place it.",
        "check": "Each room has the intended name.",
        "hint": "Custom… lets you enter your own text. Label size affects new labels; Apply size to this floor resizes existing ones."
      },
      {
        "id": "leave-label-tool",
        "title": "Stop placing names",
        "instruction": "Choose another tool when you are finished.",
        "check": "Your next tap will not add another label."
      }
    ]
  },
  {
    "id": "place-a-door",
    "title": "Place a door",
    "group": "Building",
    "goal": "Add a doorway to an editable wall.",
    "reference": "doors",
    "steps": [
      {
        "id": "find-wall",
        "title": "Zoom to the wall",
        "instruction": "Zoom in on the wall that needs a door.",
        "check": "You can clearly see the intended wall.",
        "hint": "An imported picture needs an editable Wall traced over it first; pen strokes are not door-snap walls.",
        "image": {
          "src": "assets/tutorials/zone-sketch/05-doors.webp",
          "alt": "Door tools and doorways on the practice layout.",
          "caption": "Check the wall, opening width and door swing."
        }
      },
      {
        "id": "choose-door",
        "title": "Choose Door",
        "instruction": "Open Objects and choose Door.",
        "check": "The Door tool is active."
      },
      {
        "id": "drag-opening",
        "title": "Drag the opening",
        "instruction": "Press on the wall and drag along it across the opening width. Keep your finger on the intended swing side, then release.",
        "check": "The door is placed in the wall."
      },
      {
        "id": "check-swing",
        "title": "Check the door",
        "instruction": "Check the hinge and swing direction.",
        "check": "The door opens the intended way.",
        "hint": "If it is wrong, Undo and draw it again from the correct side. Deleting a door leaves its opening; Undo restores the door."
      }
    ]
  },
  {
    "id": "import-a-plan",
    "title": "Import a background plan",
    "group": "Building",
    "goal": "Use an existing image or PDF as a drawing background.",
    "reference": "doors",
    "steps": [
      {
        "id": "choose-empty-floor",
        "title": "Use an empty floor",
        "instruction": "Use an empty floor or a separate practice project.",
        "check": "There is no drawing here that you need to keep.",
        "hint": "Replacing a floor plan clears its objects and labels after confirmation. Export a backup before replacing useful work.",
        "image": {
          "src": "assets/tutorials/zone-sketch/03-quick-rooms.webp",
          "alt": "Practice building with an outer rectangle and internal walls.",
          "caption": "Building tools create editable walls."
        }
      },
      {
        "id": "open-import",
        "title": "Open Import plan",
        "instruction": "Open Menu, then Project → Import plan.",
        "check": "The file picker opens."
      },
      {
        "id": "choose-file",
        "title": "Choose the plan file",
        "instruction": "Select a supported image or PDF.",
        "check": "The app starts importing the plan."
      },
      {
        "id": "choose-pdf-page",
        "title": "Finish the import prompts",
        "instruction": "For a PDF, follow the page selection and import prompts.",
        "check": "The chosen plan is visible on the floor."
      },
      {
        "id": "check-background",
        "title": "Check the background",
        "instruction": "Check the floor and orientation before tracing.",
        "check": "The plan is ready for editable drawing objects.",
        "hint": "Picture opacity can fade the background. Its printed walls and text do not become separate editable objects."
      }
    ]
  },
  {
    "id": "delete-and-undo",
    "title": "Delete and undo a mistake",
    "group": "Fix mistakes",
    "goal": "Practise removing objects and restoring them.",
    "reference": "delete",
    "steps": [
      {
        "id": "choose-delete",
        "title": "Choose Delete",
        "instruction": "On the practice layout, tap the delete icon ⌫.",
        "check": "Delete is active.",
        "hint": "Survey has a labelled Delete tool and protects the building underneath.",
        "image": {
          "src": "assets/tutorials/zone-sketch/06-delete-before.webp",
          "alt": "Objects highlighted red during a delete swipe.",
          "caption": "Red previews the objects touched by a delete swipe."
        }
      },
      {
        "id": "delete-one",
        "title": "Delete one object",
        "instruction": "Tap an extra practice wall and release.",
        "check": "The wall object disappears.",
        "hint": "Delete removes whole drawing objects, not little pixels from a line."
      },
      {
        "id": "undo-delete",
        "title": "Restore the wall",
        "instruction": "Tap Undo.",
        "check": "The deleted wall returns.",
        "hint": "Redo reapplies an undone edit. Making a new edit clears Redo."
      },
      {
        "id": "sweep-delete",
        "title": "Try a delete swipe",
        "instruction": "With Delete active, hold and sweep across the practice wall, then release.",
        "check": "Touched objects turn red, then disappear on release."
      },
      {
        "id": "undo-swipe",
        "title": "Restore the swipe",
        "instruction": "Tap Undo once.",
        "check": "The objects from that whole swipe return.",
        "hint": "Undo history is limited and resets when projects are opened or switched."
      },
      {
        "id": "leave-delete",
        "title": "Leave Delete mode",
        "instruction": "Choose another tool.",
        "check": "Your next touch will not delete an object."
      }
    ]
  },
  {
    "id": "add-fire-zone",
    "title": "Add a Fire zone",
    "group": "Fire zones",
    "goal": "Mark an alarm area in a Fresh install project.",
    "reference": "zones",
    "steps": [
      {
        "id": "create-zone",
        "title": "Open Create zone",
        "instruction": "Open Zones and tap Create zone, or + Zone in the panel.",
        "check": "The zone details open.",
        "image": {
          "src": "assets/tutorials/zone-sketch/14-zone.webp",
          "alt": "A coloured Fire zone area over the practice building.",
          "caption": "A room and a Fire zone describe different things."
        }
      },
      {
        "id": "save-zone",
        "title": "Save the zone details",
        "instruction": "Enter a zone number, area description and colour, then save.",
        "check": "The zone appears in the list."
      },
      {
        "id": "select-zone",
        "title": "Select the zone",
        "instruction": "Choose the zone you just created.",
        "check": "Its number appears in the zone menu."
      },
      {
        "id": "draw-zone-area",
        "title": "Draw its area",
        "instruction": "Open that zone menu, choose Box and drag over its rooms.",
        "check": "A coloured zone area covers the intended rooms."
      },
      {
        "id": "check-zone",
        "title": "Check the zone key",
        "instruction": "Check the number, description and coloured area.",
        "check": "The intended zone appears in the key.",
        "hint": "Additional work has no zone controls; it uses Start and Return points instead."
      }
    ]
  },
  {
    "id": "place-survey-devices",
    "title": "Place Survey devices",
    "group": "Devices",
    "goal": "Add device symbols over the building layout.",
    "reference": "devices",
    "steps": [
      {
        "id": "open-survey",
        "title": "Open Survey mode",
        "instruction": "Tap Survey mode in the top controls.",
        "check": "The Survey workspace opens.",
        "hint": "Additional work calls this stage Add devices.",
        "image": {
          "src": "assets/tutorials/zone-sketch/08-devices.webp",
          "alt": "Survey devices placed over the practice building.",
          "caption": "The layout stays underneath the surveyed devices."
        }
      },
      {
        "id": "open-library",
        "title": "Open Add device",
        "instruction": "Tap Add device.",
        "check": "The device library opens."
      },
      {
        "id": "choose-device",
        "title": "Choose a device",
        "instruction": "Choose Smoke, Heat or the device you need.",
        "check": "That device is ready to place.",
        "hint": "For the Fresh install circuit exercise, also place Fire panel near the entrance."
      },
      {
        "id": "place-device",
        "title": "Place the device",
        "instruction": "Tap where the device belongs on the plan.",
        "check": "Its symbol appears over the building.",
        "hint": "Further taps place more of the same type until you change tools."
      },
      {
        "id": "stop-placement",
        "title": "Stop placing devices",
        "instruction": "Tap Select / move.",
        "check": "You can select existing devices without adding another."
      }
    ]
  },
  {
    "id": "move-a-device",
    "title": "Move a device",
    "group": "Devices",
    "goal": "Correct one device position without replacing it.",
    "reference": "device-edit",
    "steps": [
      {
        "id": "choose-select-move",
        "title": "Choose Select / move",
        "instruction": "In Survey, tap Select / move.",
        "check": "Device selection is active.",
        "image": {
          "src": "assets/tutorials/zone-sketch/08-devices.webp",
          "alt": "Survey devices placed over the practice building.",
          "caption": "The layout stays underneath the surveyed devices."
        }
      },
      {
        "id": "drag-device",
        "title": "Drag the device",
        "instruction": "Press the device symbol, drag it to its new position and release.",
        "check": "The selected device stays at its new position."
      },
      {
        "id": "check-position",
        "title": "Check its position",
        "instruction": "Check where the device snapped.",
        "check": "The same device is in the intended position.",
        "hint": "Move ON pans the view. Field grid shows or hides the grid; it does not move devices."
      }
    ]
  },
  {
    "id": "name-device-references",
    "title": "Give devices clear references",
    "group": "Devices",
    "goal": "Identify devices with references that match your records.",
    "reference": "asset-organisation",
    "steps": [
      {
        "id": "select-device",
        "title": "Select one device",
        "instruction": "Use Select / move and tap the device.",
        "check": "One device is selected.",
        "image": {
          "src": "assets/tutorials/zone-sketch/08-devices.webp",
          "alt": "Survey devices placed over the practice building.",
          "caption": "The layout stays underneath the surveyed devices."
        }
      },
      {
        "id": "open-properties",
        "title": "Open Properties",
        "instruction": "Tap Properties in the selection controls.",
        "check": "The device properties open.",
        "image": {
          "src": "assets/tutorials/zone-sketch/15-device-reference.webp",
          "alt": "A device reference entered in the selected device properties.",
          "caption": "Reference text identifies a device; it does not program its address."
        }
      },
      {
        "id": "enter-reference",
        "title": "Enter Device reference",
        "instruction": "Enter a clear reference, such as L1-001 Office.",
        "check": "The intended reference is in the field.",
        "hint": "Fire references allow up to 24 characters. This text does not set an electrical address or assign a loop."
      },
      {
        "id": "save-reference",
        "title": "Save the reference",
        "instruction": "Tap Save.",
        "check": "The reference appears beside the device."
      },
      {
        "id": "check-duplicates",
        "title": "Check for duplicates",
        "instruction": "Check the other devices for repeated or missing references.",
        "check": "Each device has the reference you intended.",
        "hint": "Do not assume placement numbers devices automatically. Check copied information after Duplicate."
      }
    ]
  },
  {
    "id": "set-device-record-state",
    "title": "Record a device state",
    "group": "Devices",
    "goal": "Record whether equipment is existing, proposed or installed.",
    "reference": "completed",
    "steps": [
      {
        "id": "select-device",
        "title": "Select the device",
        "instruction": "Use Select / move and select the device.",
        "check": "The intended device is selected.",
        "image": {
          "src": "assets/tutorials/zone-sketch/08-devices.webp",
          "alt": "Survey devices placed over the practice building.",
          "caption": "The layout stays underneath the surveyed devices."
        }
      },
      {
        "id": "open-properties",
        "title": "Open Properties",
        "instruction": "Tap Properties.",
        "check": "The selected device properties open.",
        "image": {
          "src": "assets/tutorials/zone-sketch/09-device-properties.webp",
          "alt": "Device properties with reference, size, rotation and Record state / As-Fit.",
          "caption": "Select one device before opening Properties."
        }
      },
      {
        "id": "open-record-state",
        "title": "Open its record",
        "instruction": "Tap Record state / As-Fit.",
        "check": "Maps & As-Fits opens for that item."
      },
      {
        "id": "choose-state",
        "title": "Choose Record state",
        "instruction": "Choose the actual state, such as Surveyed existing, Proposed or Installed.",
        "check": "The state matches the equipment you are documenting.",
        "hint": "Verified As-Fit requires your name and confirmation of an onsite check; drawing a route does not perform that check."
      },
      {
        "id": "save-state",
        "title": "Save the item state",
        "instruction": "Add an Item record note if needed, then tap Save item state.",
        "check": "The app reports Record saved."
      }
    ]
  },
  {
    "id": "build-conventional-circuit",
    "title": "Build a conventional circuit",
    "group": "Fire circuits",
    "goal": "Route one Fresh install zone through its required devices.",
    "reference": "circuits",
    "steps": [
      {
        "id": "check-preparation",
        "title": "Check the floor and devices",
        "instruction": "Check that this floor has its Fire zone, Survey devices and Fire panel.",
        "check": "The intended zone and equipment are on the same floor.",
        "image": {
          "src": "assets/tutorials/zone-sketch/10-circuit-setup.webp",
          "alt": "Fire circuit setup with conventional zone and highlighted loop options.",
          "caption": "Choose the required devices before drawing cable."
        }
      },
      {
        "id": "open-as-fit",
        "title": "Open As-fit mode",
        "instruction": "Tap As-fit mode.",
        "check": "The Fire circuit builder opens."
      },
      {
        "id": "choose-zone",
        "title": "Choose the zone challenge",
        "instruction": "Use Zone Challenge and choose the intended zone colour.",
        "check": "The builder highlights the required zone devices."
      },
      {
        "id": "start-cable",
        "title": "Start at FAP",
        "instruction": "Press at the highlighted panel start, drag to the first device and release.",
        "check": "The cable reaches the first device.",
        "image": {
          "src": "assets/tutorials/zone-sketch/11-circuit-route.webp",
          "alt": "Fire circuit route in the builder with its device progress.",
          "caption": "Follow the route tip and check required-device progress."
        }
      },
      {
        "id": "connect-devices",
        "title": "Reach the required devices",
        "instruction": "Draw through the required devices and watch the remaining count.",
        "check": "Completion appears after the required devices are connected.",
        "hint": "A conventional zone does not need an invented return to the panel. Undo leg backs up a routing step."
      },
      {
        "id": "keep-circuit",
        "title": "Keep the circuit",
        "instruction": "When completion is shown, tap Keep circuit ✓.",
        "check": "The completed circuit is kept."
      }
    ]
  },
  {
    "id": "build-addressable-loop",
    "title": "Build an addressable loop",
    "group": "Fire circuits",
    "goal": "Select the loop devices and route back to the panel.",
    "reference": "asset-organisation",
    "steps": [
      {
        "id": "open-as-fit",
        "title": "Open As-fit mode",
        "instruction": "With the Fire panel and Survey devices placed, open As-fit mode.",
        "check": "The builder shows the current floor.",
        "image": {
          "src": "assets/tutorials/zone-sketch/16-loop-selection.webp",
          "alt": "Devices highlighted for an addressable Fire loop.",
          "caption": "Highlight only the devices that belong in this loop."
        }
      },
      {
        "id": "choose-highlight-loop",
        "title": "Choose Highlight a loop",
        "instruction": "Tap Highlight a loop.",
        "check": "Device highlighting opens."
      },
      {
        "id": "highlight-devices",
        "title": "Highlight the loop devices",
        "instruction": "Tap or sweep over the devices that belong in this loop.",
        "check": "Only the intended devices are highlighted."
      },
      {
        "id": "build-selected-loop",
        "title": "Build the selected loop",
        "instruction": "Tap Build highlighted loop.",
        "check": "The normal routing workspace opens."
      },
      {
        "id": "route-through-devices",
        "title": "Route through the devices",
        "instruction": "Start at FAP and draw through the highlighted devices.",
        "check": "The required-device progress advances."
      },
      {
        "id": "return-to-panel",
        "title": "Return to FAP",
        "instruction": "Draw the final route back to the panel.",
        "check": "The loop shows completion."
      },
      {
        "id": "keep-loop",
        "title": "Keep the loop",
        "instruction": "Tap Keep circuit ✓.",
        "check": "The saved loop appears in the builder.",
        "hint": "The builder assigns names such as Loop 1 and Loop 2 on this floor. There is no separate loop-name editor."
      }
    ]
  },
  {
    "id": "choose-additional-endpoints",
    "title": "Choose Start and Return",
    "group": "Additional Fire",
    "goal": "Set up the two connections for an added circuit section.",
    "reference": "additional",
    "steps": [
      {
        "id": "create-additional-project",
        "title": "Create an Additional work project",
        "instruction": "In New project, choose Fire and Additional work before using Create.",
        "check": "The project opens with Building layout.",
        "image": {
          "src": "assets/tutorials/zone-sketch/01-new-project.webp",
          "alt": "New project dialog showing Fire, Fresh install and Additional work.",
          "caption": "Choose a system and work type before creating the project."
        }
      },
      {
        "id": "prepare-layout",
        "title": "Draw the affected layout",
        "instruction": "Use Building layout to draw or import the area you need.",
        "check": "The relevant building area is visible.",
        "hint": "Use Existing cable for straight reference sections, starting the next at the previous end for a bend. No zones or new Fire panel are required."
      },
      {
        "id": "place-devices",
        "title": "Place the relevant devices",
        "instruction": "In Add devices, place the existing connection devices and the devices you are adding.",
        "check": "Both existing and added equipment are on the plan.",
        "hint": "Use Record state / As-Fit to mark existing equipment Surveyed existing when appropriate.",
        "image": {
          "src": "assets/tutorials/zone-sketch/08-devices.webp",
          "alt": "Survey devices placed over the practice building.",
          "caption": "The layout stays underneath the surveyed devices."
        }
      },
      {
        "id": "open-endpoint-setup",
        "title": "Open connection setup",
        "instruction": "Choose Circuit builder → Choose connection points.",
        "check": "Choose last device / cable joint location appears."
      },
      {
        "id": "choose-start",
        "title": "Tap the Start point",
        "instruction": "Tap an existing device, a cable point or a standalone joint location on the plan.",
        "check": "The chosen location is marked Start.",
        "hint": "Tapping blank plan space can mark a standalone joint; it is not another detector."
      },
      {
        "id": "choose-return",
        "title": "Tap the Return point",
        "instruction": "Tap the return device or joint, or tap Start again to return there.",
        "check": "Endpoint selection finishes and added-device selection opens.",
        "hint": "These are two ordinary taps, with no double-click timing or extra confirmation."
      },
      {
        "id": "check-endpoints",
        "title": "Check both endpoints",
        "instruction": "Check Start and Return before selecting the added devices.",
        "check": "The endpoints match the intended section.",
        "hint": "Use Change connection points to correct the setup. Choosing endpoints does not draw or complete the route."
      }
    ]
  },
  {
    "id": "route-additional-section",
    "title": "Route the added section",
    "group": "Additional Fire",
    "goal": "Draw through the added devices and reach the selected Return.",
    "reference": "additional",
    "steps": [
      {
        "id": "highlight-added-devices",
        "title": "Highlight added devices",
        "instruction": "In Highlight additional devices, select at least one added device.",
        "check": "Only devices in the added section are selected.",
        "hint": "Start and Return devices are not selected again as added devices.",
        "image": {
          "src": "assets/tutorials/zone-sketch/08-devices.webp",
          "alt": "Survey devices placed over the practice building.",
          "caption": "The layout stays underneath the surveyed devices."
        }
      },
      {
        "id": "build-section",
        "title": "Build the additional section",
        "instruction": "Tap Build additional section.",
        "check": "The routing workspace opens."
      },
      {
        "id": "leave-start",
        "title": "Start drawing the cable",
        "instruction": "Press at Start, drag to the first added device and release.",
        "check": "The route reaches the first added device."
      },
      {
        "id": "reach-added-devices",
        "title": "Reach all selected devices",
        "instruction": "Draw through the selected devices and check the remaining count.",
        "check": "No required added devices remain unconnected."
      },
      {
        "id": "reach-return",
        "title": "Connect to Return",
        "instruction": "Draw the final connection to Return.",
        "check": "The circuit shows completion.",
        "hint": "When Start and Return are the same point, the route must still leave it, reach the selected devices and return."
      },
      {
        "id": "keep-section",
        "title": "Keep the section",
        "instruction": "Tap Keep circuit ✓ when completion is shown.",
        "check": "The completed added section is kept."
      }
    ]
  },
  {
    "id": "return-to-an-existing-cable",
    "title": "Return to a cable joint",
    "group": "Additional Fire",
    "goal": "Replace Return with a deliberate connection to a cable.",
    "reference": "additional",
    "steps": [
      {
        "id": "finish-required-devices",
        "title": "Connect the selected devices",
        "instruction": "While building the additional section, connect every selected device first.",
        "check": "The remaining-device count is zero.",
        "image": {
          "src": "assets/tutorials/zone-sketch/11-circuit-route.webp",
          "alt": "Example of the shared Fire routing workspace.",
          "caption": "The routing controls are shared; Additional work uses Start and Return."
        }
      },
      {
        "id": "reach-cable",
        "title": "Draw right up to the cable",
        "instruction": "Bring the return route to the actual cable location you want.",
        "check": "The route tip reaches the target cable.",
        "hint": "Holding elsewhere cannot create a shortcut or a disconnected endpoint."
      },
      {
        "id": "hold-contact",
        "title": "Hold for five seconds",
        "instruction": "Press and hold that contact for five full seconds.",
        "check": "Visible hold progress reaches the end.",
        "hint": "Releasing early, moving away or starting a pan or pinch cancels the hold."
      },
      {
        "id": "check-joint",
        "title": "Check the new Return",
        "instruction": "Check the explicit joint and the updated Return point.",
        "check": "The circuit returns to the cable at that joint.",
        "hint": "A normal tap or an ordinary cable crossing does not create this connection."
      }
    ]
  },
  {
    "id": "view-finished-drawings",
    "title": "View the three drawings",
    "group": "Outputs",
    "goal": "Generate the Fire As-fit and inspect the saved drawing cards.",
    "reference": "completed",
    "steps": [
      {
        "id": "complete-fire-circuits",
        "title": "Generate the Fire As-fit",
        "instruction": "After keeping all required Fire circuits, choose Complete circuits → As-Fit.",
        "check": "The finished Fire drawing is generated.",
        "image": {
          "src": "assets/tutorials/zone-sketch/12-completed-drawings.webp",
          "alt": "Completed steps viewer with Zones, Survey and As fit cards.",
          "caption": "Choose the floor, then the drawing you want to inspect."
        }
      },
      {
        "id": "open-home",
        "title": "Return to Home",
        "instruction": "Tap Back to plan, then choose Project → Home / Projects.",
        "check": "The site card is visible."
      },
      {
        "id": "open-completed-steps",
        "title": "Open Show completed steps",
        "instruction": "Tap Show completed steps on the site card.",
        "check": "The drawing viewer opens."
      },
      {
        "id": "choose-floor",
        "title": "Choose the floor",
        "instruction": "Use Floor to select the intended floor.",
        "check": "The drawing cards belong to that floor."
      },
      {
        "id": "choose-drawing",
        "title": "Choose a drawing card",
        "instruction": "Tap Zones, Survey or As fit to view its drawing.",
        "check": "The selected drawing appears below.",
        "hint": "Additional work uses Building layout and Add devices for the first two cards. A card with no finished data says Not completed."
      },
      {
        "id": "inspect-drawing",
        "title": "Check the details",
        "instruction": "Use the zoom bar to inspect the title, references and route; use Fit to see the paper again.",
        "check": "The saved drawing is readable and matches the intended work.",
        "hint": "A valid saved Fire As-fit remains viewable when you reopen As-fit mode. The viewer offers Export As-Fit PNG."
      }
    ]
  },
  {
    "id": "save-editable-backup",
    "title": "Save an editable backup",
    "group": "Keep your work",
    "goal": "Keep a separate file that can reopen the editable project.",
    "reference": "backup",
    "steps": [
      {
        "id": "wait-for-autosave",
        "title": "Wait for Saved locally",
        "instruction": "Wait until Saving… changes to Saved locally.",
        "check": "The current device has saved the project.",
        "hint": "Local autosave does not copy projects to another phone."
      },
      {
        "id": "export-backup",
        "title": "Save the editable backup",
        "instruction": "Choose Project → Save editable backup, or Export on the Home card.",
        "check": "Your device offers the backup file.",
        "image": {
          "src": "assets/tutorials/zone-sketch/13-project-backup.webp",
          "alt": "Home project card showing Duplicate, Copy layout and Export.",
          "caption": "Project copies and editable backups are separate actions."
        }
      },
      {
        "id": "keep-backup-file",
        "title": "Keep the backup file",
        "instruction": "Save the .zonesketch.json file in a location you can find again.",
        "check": "A separate editable backup exists.",
        "hint": "A PNG or PDF drawing is not an editable backup. Keep a backup before replacing a plan or clearing browser data."
      }
    ]
  },
  {
    "id": "restore-editable-backup",
    "title": "Open a backup",
    "group": "Keep your work",
    "goal": "Restore a saved project as a new working copy.",
    "reference": "backup",
    "steps": [
      {
        "id": "open-backup-import",
        "title": "Open Import backup",
        "instruction": "On Home, tap Import backup, or use Project → Open backup.",
        "check": "The file picker opens.",
        "image": {
          "src": "assets/tutorials/zone-sketch/13-project-backup.webp",
          "alt": "Home project card showing Duplicate, Copy layout and Export.",
          "caption": "Project copies and editable backups are separate actions."
        }
      },
      {
        "id": "choose-backup",
        "title": "Choose the editable file",
        "instruction": "Select the saved .zonesketch.json file.",
        "check": "A new working project is imported."
      },
      {
        "id": "check-restored-project",
        "title": "Check the restored project",
        "instruction": "Check the site name, floors, devices and drawing before continuing.",
        "check": "The imported copy contains the work you expected.",
        "hint": "Backups include editable floors, devices, photos and circuits."
      }
    ]
  },
  {
    "id": "duplicate-project",
    "title": "Duplicate the whole project",
    "group": "Keep your work",
    "goal": "Make a full working copy for a separate revision or experiment.",
    "reference": "backup",
    "steps": [
      {
        "id": "find-project",
        "title": "Find the project card",
        "instruction": "Return to Home / Projects and find the correct site.",
        "check": "The intended site card is visible.",
        "image": {
          "src": "assets/tutorials/zone-sketch/13-project-backup.webp",
          "alt": "Home project card showing Duplicate, Copy layout and Export.",
          "caption": "Project copies and editable backups are separate actions."
        }
      },
      {
        "id": "duplicate-project",
        "title": "Tap Duplicate",
        "instruction": "Tap Duplicate on that card.",
        "check": "A separate project card with a copy name appears."
      },
      {
        "id": "open-copy",
        "title": "Open the copy",
        "instruction": "Open the new copy before making changes.",
        "check": "You are working on the separate full copy.",
        "hint": "Check its name and contents before editing; Copy layout… has a different purpose."
      }
    ]
  },
  {
    "id": "copy-building-layout",
    "title": "Copy the building to another system",
    "group": "Keep your work",
    "goal": "Reuse the site layout with an empty device and circuit record.",
    "reference": "backup",
    "steps": [
      {
        "id": "open-copy-layout",
        "title": "Open Copy layout…",
        "instruction": "On the source project card, tap Copy layout….",
        "check": "Copy site layout opens.",
        "image": {
          "src": "assets/tutorials/zone-sketch/13-project-backup.webp",
          "alt": "Home project card showing Duplicate, Copy layout and Export.",
          "caption": "Project copies and editable backups are separate actions."
        }
      },
      {
        "id": "name-copy",
        "title": "Name the new project",
        "instruction": "Enter a name that identifies the new system or drawing.",
        "check": "The copy has a distinct project name."
      },
      {
        "id": "choose-system",
        "title": "Choose the destination system",
        "instruction": "Choose CCTV, Security, Access Control or the system you need.",
        "check": "The intended system is selected.",
        "hint": "Security is the choice for Intruder work."
      },
      {
        "id": "create-layout-copy",
        "title": "Create the layout copy",
        "instruction": "Tap the green Create button.",
        "check": "The new system project opens."
      },
      {
        "id": "check-empty-record",
        "title": "Check what was copied",
        "instruction": "Check the floors, imported plans, building and room labels.",
        "check": "The building is copied while devices, circuits and records start empty."
      }
    ]
  },
  {
    "id": "start-another-system",
    "title": "Start a non-Fire survey",
    "group": "Other systems",
    "goal": "Use the device library for CCTV, Security or Access Control.",
    "reference": "other-systems",
    "steps": [
      {
        "id": "choose-project-system",
        "title": "Choose the system",
        "instruction": "In New project, select CCTV, Security or Access Control.",
        "check": "The required system card is selected.",
        "image": {
          "src": "assets/tutorials/zone-sketch/01-new-project.webp",
          "alt": "New project dialog showing Fire, Fresh install and Additional work.",
          "caption": "Choose a system and work type before creating the project."
        }
      },
      {
        "id": "create-system-project",
        "title": "Create the project",
        "instruction": "Enter a project name and use the green Create button.",
        "check": "The chosen system workspace opens."
      },
      {
        "id": "prepare-building",
        "title": "Prepare the building",
        "instruction": "Draw the layout, or start with a Copy layout… project.",
        "check": "The relevant walls and doors are available.",
        "hint": "Draw the door first for Access Control equipment."
      },
      {
        "id": "open-system-library",
        "title": "Open the device library",
        "instruction": "Choose Survey mode → Add device.",
        "check": "The library contains devices for this system."
      },
      {
        "id": "place-system-device",
        "title": "Place one device",
        "instruction": "Choose a device and place it using its placement gesture.",
        "check": "The device is on the intended part of the plan.",
        "hint": "CCTV cameras: drag to aim. Security PIR/DT detectors: drag for direction; door contacts can snap to a drawn door. The 360 detector stays freely placed."
      },
      {
        "id": "check-system-properties",
        "title": "Check its properties",
        "instruction": "Select the device and review the available Properties and system settings.",
        "check": "Its direction or door association matches your drawing.",
        "hint": "These systems use their own connection tools, not Fire Zone Challenge."
      }
    ]
  },
  {
    "id": "issue-another-system-record",
    "title": "Issue a system record",
    "group": "Other systems",
    "goal": "Keep an issued As-fit snapshot for CCTV, Intruder or Access Control.",
    "reference": "completed",
    "steps": [
      {
        "id": "open-records",
        "title": "Open Maps & As-Fits",
        "instruction": "Choose Project → Maps & As-Fits.",
        "check": "The record controls open.",
        "image": {
          "src": "assets/tutorials/zone-sketch/09-device-properties.webp",
          "alt": "Device properties showing the Record state / As-Fit shortcut.",
          "caption": "The device shortcut also opens the record controls."
        }
      },
      {
        "id": "name-issuer",
        "title": "Enter the issuer name",
        "instruction": "Enter Engineer / issuer name.",
        "check": "The intended issuer is recorded."
      },
      {
        "id": "review-item-states",
        "title": "Review the item states",
        "instruction": "Select each relevant item, check its actual record state and use Save item state for changes.",
        "check": "The record reflects what was found, fitted or checked.",
        "hint": "Use Verified As-Fit only after the required onsite check and confirmation; route completion does not verify items."
      },
      {
        "id": "describe-revision",
        "title": "Describe the issue",
        "instruction": "Enter Revision and Revision / issue note.",
        "check": "The revision and any limitations are clear."
      },
      {
        "id": "issue-snapshot",
        "title": "Issue the snapshot",
        "instruction": "Choose Issue As-Fit snapshot.",
        "check": "The saved issue appears under Issued snapshots."
      },
      {
        "id": "export-issued-record",
        "title": "Export the saved issue",
        "instruction": "Use Issued PDF, Issued CSV or Issued JSON for the issue you need.",
        "check": "The exported file comes from that saved issue.",
        "hint": "The latest issued snapshot supplies this floor’s record card in Show completed steps. Later changes need another review."
      }
    ]
  }
];
