window.TutorialTasks = window.TutorialTasks || {};
window.TutorialTasks.findr = [
  {
    id: "save-a-manual", title: "Save your first manual", group: "Get started",
    goal: "Find the right document and save its PDF on this device.", reference: "findr-manuals",
    steps: [
      { id: "search-open", title: "Open the catalogue", instruction: "Tap Manuals, then Find a manual.", check: "The manual search box is visible.", image: { src: "assets/tutorials/findr/02-manual-search.webp", alt: "FINDR manual search with matching document records.", caption: "Search by the model on the equipment label." } },
      { id: "search-model", title: "Enter the model", instruction: "Type the model or product code from the equipment label. Try XFP for a practice search.", check: "Matching document titles appear.", hint: "If results look wrong, use Clear filters before trying again." },
      { id: "search-document", title: "Check the document", instruction: "Read the title, document type and edition where shown. Choose the reference that applies to the equipment.", check: "You have identified the intended manual." },
      { id: "search-save", title: "Save the PDF", instruction: "Tap Save PDF and keep FINDR connected while it downloads.", check: "The record shows SAVED ON DEVICE.", hint: "A Source link opens a website; it does not save the PDF in FINDR." },
      { id: "search-read", title: "Open the saved file", instruction: "Tap Read. Check the model and edition inside the document.", check: "The actual PDF opens in the reader." }
    ]
  },
  {
    id: "read-a-saved-pdf", title: "Find a page in a PDF", group: "Get started",
    goal: "Reopen a saved manual and find a page or phrase.", reference: "findr-saved-pdfs",
    steps: [
      { id: "reader-library", title: "Open Saved PDFs", instruction: "Tap Saved PDFs on Home, or find the Saved PDFs tab in Manuals.", check: "Your saved files are listed.", image: { src: "assets/tutorials/findr/03-saved-pdfs.webp", alt: "FINDR Saved PDFs list with a Read button.", caption: "These files are stored in this FINDR installation." } },
      { id: "reader-open", title: "Open one file", instruction: "Tap Read beside the manual you need.", check: "Its pages appear in the reader." },
      { id: "reader-page", title: "Turn a page", instruction: "Use a page arrow or enter a PDF page number.", check: "The displayed page changes.", hint: "PDF page numbers may differ from the numbers printed on the sheets.", image: { src: "assets/tutorials/findr/04-pdf-reader.webp", alt: "A saved manual open in FINDR's PDF reader.", caption: "Use page controls to move through the document." } },
      { id: "reader-find", title: "Find a phrase", instruction: "Enter a short phrase in Find text in this PDF, then tap Find.", check: "A match opens its page, or the reader reports no match.", hint: "Scanned pages may have no searchable text. Use the contents page if needed." }
    ]
  },
  {
    id: "import-a-pdf", title: "Import your own PDF", group: "Get started",
    goal: "Add a PDF from your phone to the saved library.", reference: "findr-saved-pdfs",
    steps: [
      { id: "pdf-import-open", title: "Open PDF import", instruction: "On Home, tap Import a PDF. Manuals also has an Import PDF button near the bottom.", check: "Your device's file picker opens.", image: { src: "assets/tutorials/findr/01-home.webp", alt: "FINDR Home with manual-library and offline-kit controls.", caption: "Start from Home's Import a PDF control." } },
      { id: "pdf-import-file", title: "Choose the file", instruction: "Select the PDF from Files or Downloads.", check: "FINDR validates and saves the file.", hint: "The limit is 120 MiB. Keep your original file outside browser storage too." },
      { id: "pdf-import-list", title: "Find the saved copy", instruction: "Look in Saved PDFs for the document. An unmatched file appears as a local import.", check: "The imported document has a Read button." },
      { id: "pdf-import-check", title: "Check its contents", instruction: "Tap Read and check its model and edition.", check: "The document opens and you can identify its scope." }
    ]
  },
  {
    id: "check-offline-access", title: "Check a manual offline", group: "Get started",
    goal: "Confirm that a particular saved manual works without a connection.", reference: "findr-offline",
    steps: [
      { id: "offline-status", title: "Check the app status", instruction: "Tap FINDR's offline-status line. Let app preparation finish while connected.", check: "The resource panel shows separate app, PDF, OCR and model states.", image: { src: "assets/tutorials/findr/08-local-resources.webp", alt: "FINDR offline-kit panel with separate resource readiness states.", caption: "Check each resource; one ready item does not mean everything is ready." } },
      { id: "offline-file", title: "Open the required manual", instruction: "Return to Saved PDFs and tap Read on the file you need.", check: "The saved PDF opens while you are online." },
      { id: "offline-disconnect", title: "Turn on airplane mode", instruction: "Use your phone's airplane-mode control.", check: "The phone is disconnected for this check." },
      { id: "offline-reopen", title: "Try the saved file again", instruction: "Reopen FINDR using the same browser or installed icon. Open that manual from Saved PDFs.", check: "The file opens without a connection.", hint: "Pictures and catalogue titles are not saved full PDFs. A different website or browser has separate storage." },
      { id: "offline-reconnect", title: "Reconnect", instruction: "Turn airplane mode off after the check.", check: "Your normal connection is restored.", hint: "Manual reading does not require a local AI model. Check a Panel Pal's own readiness before using it offline." }
    ]
  },
  {
    id: "compare-panel-pictures", title: "Check a panel picture", group: "Equipment references",
    goal: "Find a panel reference and check its model and document links.", reference: "findr-pictures",
    steps: [
      { id: "panel-pack-open", title: "Open panel packs", instruction: "Choose Manuals → Panel packs, or Browse panel packs on Home.", check: "The panel-pack list appears." },
      { id: "panel-pack-search", title: "Find the brand", instruction: "Search for the brand and tap View pack on the relevant card.", check: "The pack's pictures and document list appear." },
      { id: "panel-picture-open", title: "Inspect a panel", instruction: "Tap View panel on the model you want to check.", check: "Its picture and identification details are visible.", image: { src: "assets/tutorials/findr/05-panel-pictures.webp", alt: "FINDR panel picture references for XFP models.", caption: "Use the picture with the model label, not instead of it." } },
      { id: "panel-picture-label", title: "Compare the model label", instruction: "Match the reference to the label on the actual equipment.", check: "You can identify the matching model or record that it is still uncertain.", hint: "A similar front does not establish the variant or firmware." },
      { id: "panel-pack-files", title: "Check the saved count", instruction: "Return to the pack and read its downloadable-PDF count.", check: "You know which full manuals still need saving.", hint: "Download missing PDFs saves available files. Pictures alone do not mean the full manuals are saved." }
    ]
  },
  {
    id: "check-a-device-reference", title: "Check a device part number", group: "Equipment references",
    goal: "Use a device picture alongside its part number and documented application.", reference: "findr-pictures",
    steps: [
      { id: "device-pack-open", title: "Open device packs", instruction: "Tap Manuals → Device packs.", check: "The device-pack search is visible." },
      { id: "device-pack-find", title: "Find the device", instruction: "Search its brand or part number, then choose View device pack.", check: "The relevant device cards appear." },
      { id: "device-reference-open", title: "Open its reference", instruction: "Tap View device and read the product codes and protocol/system details.", check: "The identifying information is visible.", image: { src: "assets/tutorials/findr/06-device-pictures.webp", alt: "FINDR device picture and identification details.", caption: "Check the exact code and documented application." } },
      { id: "device-reference-docs", title: "Check a document link", instruction: "Open the linked document or Manufacturer document reference.", check: "You can inspect its source and scope.", hint: "A manufacturer link may need internet. Similar appearance does not establish compatibility." }
    ]
  },
  {
    id: "find-a-wiring-reference", title: "Find a wiring picture", group: "Equipment references",
    goal: "Locate a reviewed wiring page and check its original source.", reference: "findr-wiring",
    steps: [
      { id: "wiring-open", title: "Open wiring diagrams", instruction: "Tap Manuals → Wiring diagrams.", check: "The wiring-picture search appears." },
      { id: "wiring-search", title: "Search the model", instruction: "Enter a model, terminal or wiring topic.", check: "Matching reviewed pictures appear.", hint: "For a brand-and-family route, use Wiring packs instead." },
      { id: "wiring-picture", title: "Open a picture", instruction: "Tap View wiring picture on a relevant result.", check: "The source picture opens with its details.", image: { src: "assets/tutorials/findr/07-wiring.webp", alt: "A reviewed wiring picture open in FINDR.", caption: "Keep the picture's applicability and source with it." } },
      { id: "wiring-scope", title: "Read the applicability", instruction: "Check Applies to, the document edition and page details.", check: "You can tell which equipment and source the picture covers." },
      { id: "wiring-source", title: "Open the full source", instruction: "Use Open source page in saved PDF, or save the full PDF first when offered.", check: "You can read the surrounding instructions.", hint: "If the edition cannot be matched, open the saved PDF from the beginning. The bundled picture is separate from the full file." }
    ]
  },
  {
    id: "import-a-practice-schedule", title: "Import a practice schedule", group: "Equipment references",
    goal: "Save the supplied synthetic CSV as a local programmed-location reference.", reference: "findr-import",
    steps: [
      { id: "schedule-open", title: "Open schedule import", instruction: "On Home, choose Import panel download, then the import button shown.", check: "The schedule-import form appears." },
      { id: "schedule-example", title: "Get the sample CSV", instruction: "Download the labelled synthetic example CSV offered on the page.", check: "The example file is in your Downloads or Files location." },
      { id: "schedule-name", title: "Name the practice import", instruction: "Enter Tutorial practice site and Example fire panel in Site and Panel / network name.", check: "Both required name fields are filled.", hint: "Keep this example clearly separate from real site records." },
      { id: "schedule-preview", title: "Preview the file", instruction: "Choose the sample under Device schedule file, then tap Preview file.", check: "The first rows and column mappings appear.", image: { src: "assets/tutorials/findr/24-import-schedule.webp", alt: "FINDR import or lookup for the labelled synthetic panel schedule.", caption: "This is a saved file reference, not a live panel connection." } },
      { id: "schedule-map", title: "Check the mappings", instruction: "Confirm Loop and Address, then check the other columns against the preview.", check: "Each mapped field matches its source column.", hint: "Preserve network node and sub-address columns when present." },
      { id: "schedule-review", title: "Review mapped devices", instruction: "Tap Review mapped devices and inspect the site, row count and mapped values.", check: "The review contains the intended practice records." },
      { id: "schedule-save", title: "Confirm the import", instruction: "Tap Confirm import when the review is correct.", check: "The saved schedule is available for lookup.", hint: "Keep the original CSV for transfer. Native manufacturer backups are not supported; address order is not cable order." }
    ]
  },
  {
    id: "create-a-panel-pal", title: "Make a practice Panel Pal", group: "Panel Pals",
    goal: "Create a named pal for a checked system scope without assuming its files are ready.", reference: "findr-panel-pals",
    steps: [
      { id: "pal-create-open", title: "Start a new pal", instruction: "Tap Panel Pals → + Make a pal.", check: "The system-selection screen opens." },
      { id: "pal-create-system", title: "Choose the system", instruction: "Select System type, then search the manufacturer, model or protocol family.", check: "Matching choices appear." },
      { id: "pal-create-choice", title: "Choose the scope", instruction: "Tap the intended model or documented family.", check: "Let's get the right manuals opens.", image: { src: "assets/tutorials/findr/09-create-panel-pal.webp", alt: "FINDR Panel Pal setup with selected scope and manual coverage.", caption: "Check the scope and document editions before creating the pal." } },
      { id: "pal-create-name", title: "Name the pal", instruction: "Enter a clear practice name. Fill variant and firmware only when known.", check: "The pal has a recognisable name." },
      { id: "pal-create-manuals", title: "Review its manuals", instruction: "Read Coverage to check and inspect the document list.", check: "You know which required files are missing.", hint: "You can leave the optional shared local AI download unticked for manual-search practice." },
      { id: "pal-create-confirm", title: "Confirm the scope", instruction: "Read and tick the model/reference-family acknowledgement if it matches your intended scope.", check: "The scope acknowledgement is selected." },
      { id: "pal-create-save", title: "Create the pal", instruction: "Tap Create now, prepare later, or Make pal & download if ready to download.", check: "The new pal shows its actual readiness state.", hint: "Inside the pal, Manuals lets you retry missing files or add a saved PDF. Creating a pal does not make it ready offline." }
    ]
  },
  {
    id: "choose-a-reply-mode", title: "Choose how your pal replies", group: "Panel Pals",
    goal: "Select a reply mode and understand what it needs before sending a question.", reference: "findr-ai-modes",
    steps: [
      { id: "mode-open-pal", title: "Open the conversation", instruction: "Open your practice pal from Panel Pals.", check: "The conversation and mode buttons are visible." },
      { id: "mode-open-picker", title: "Open the mode chooser", instruction: "Tap Manual search, Offline AI or Online AI above the conversation.", check: "How should your pal reply? opens.", image: { src: "assets/tutorials/findr/11-answer-modes.webp", alt: "FINDR reply-mode chooser with Manual search selected.", caption: "The choice belongs to this conversation; it does not send a question." } },
      { id: "mode-practice-choice", title: "Choose Manual search", instruction: "For this practice task, select Manual search. It uses saved manual extracts without a language model.", check: "Manual search is selected.", hint: "Offline AI needs prepared local resources. Online AI needs internet, your own provider key and explicit consent; OpenAI API billing is separate from ChatGPT." },
      { id: "mode-save-choice", title: "Save the choice", instruction: "Tap Use manual search.", check: "The conversation shows the chosen mode.", hint: "Changing mode downloads no model and sends no question. Send or Retry is a separate action." }
    ]
  },
  {
    id: "ask-and-check-a-source", title: "Ask and check the source", group: "Panel Pals",
    goal: "Ask a specific manual question and inspect the evidence behind its result.", reference: "findr-answers",
    steps: [
      { id: "answer-open-job", title: "Open the right conversation", instruction: "Open your pal and use New conversation for a new job.", check: "The intended conversation is open.", hint: "Use a pal with an applicable saved, readable manual. The tutorial's older XFP logbook does not fill missing current-manual coverage." },
      { id: "answer-question", title: "Write one question", instruction: "Type a short question about the saved manual, such as What is the lamp test function?",
        check: "The question is in the message box." },
      { id: "answer-send", title: "Send the question", instruction: "Tap Send ↑ and read the mode label on the result.", check: "A result or a clear missing-evidence message appears.", image: { src: "assets/tutorials/findr/10-manual-answer.webp", alt: "A FINDR Manual search result for a lamp-test question.", caption: "This example is labelled Manual search, not an AI-generated conversation." } },
      { id: "answer-sources", title: "Expand Sources", instruction: "Check the document title, edition, page and quotation.", check: "The supporting source information is visible.", image: { src: "assets/tutorials/findr/10b-citations.webp", alt: "Expanded source citation with a saved manual and supporting text.", caption: "The source edition is part of checking the answer." } },
      { id: "answer-open-pdf", title: "Read the original page", instruction: "Tap the source's document title and read the surrounding instructions.", check: "You can compare the result with the actual PDF.", hint: "A missing answer does not prove the equipment lacks a function. Check the pal's manual library and exact wording." }
    ]
  },
  {
    id: "copy-a-panel-pal", title: "Export and import a pal", group: "Panel Pals",
    goal: "Keep a transferable copy of one pal and check it on the destination device.", reference: "findr-backups",
    steps: [
      { id: "pal-copy-settings", title: "Open Customise", instruction: "Find the pal in Panel Pals and tap Customise.", check: "Its settings include Export a copy.", image: { src: "assets/tutorials/findr/22-backup.webp", alt: "FINDR Panel Pal settings with Include saved PDFs and Export helper.", caption: "This export preserves one pal, not the whole device." } },
      { id: "pal-copy-pdfs", title: "Choose whether to include files", instruction: "Leave Include saved PDFs checked when the destination needs those manual files.", check: "The checkbox matches the copy you want.", hint: "Only this pal's selected available PDFs are included. Shared models and provider keys are excluded." },
      { id: "pal-copy-export", title: "Download the copy", instruction: "Tap Export helper and keep the FINDR-panel-pal JSON file.", check: "You can find the downloaded JSON in Files or Downloads." },
      { id: "pal-copy-import", title: "Import the copy", instruction: "On the destination, open Panel Pals → Import a pal and select that JSON.", check: "A separate pal with an (imported) name appears." },
      { id: "pal-copy-review", title: "Check its library", instruction: "Open the imported pal's Manuals and review its scope and file states.", check: "You know what needs preparing on this device.", hint: "Imported readiness and online consent are reset. Keep original PDFs and CSV schedules separately; this is not a whole-device backup." }
    ]
  },
  {
    id: "start-a-fault-guide", title: "Work through a fault guide", group: "Fault records",
    goal: "Record observations while keeping unconfirmed possibilities separate from performed tests.", reference: "findr-faults",
    steps: [
      { id: "fault-start", title: "Start fault finding", instruction: "Open the intended pal conversation and tap I want to fault find.", check: "The fault-guide controls appear." },
      { id: "fault-context", title: "Record the context", instruction: "Open Site, exact fault message & notes and enter what is known.", check: "The job reference and exact message are recorded.", hint: "Use a clearly labelled practice conversation while learning." },
      { id: "fault-type", title: "Choose the fault type", instruction: "Under What is the system reporting?, choose the closest supported type.", check: "The first observation question appears.", image: { src: "assets/tutorials/findr/12-fault-question.webp", alt: "FINDR fault question with Yes, No and I don't know choices.", caption: "Answer from observations, not assumptions." } },
      { id: "fault-answer", title: "Answer one question", instruction: "Choose Yes, No or I don't know from what has actually been established.", check: "Your observation is recorded.", hint: "A question answer does not record a physical test. Undo last answer corrects the previous choice." },
      { id: "fault-review", title: "Review the possibilities", instruction: "Tap Review possibilities and read the support, conflicts and source applicability.", check: "The causes remain labelled as unconfirmed possibilities.", image: { src: "assets/tutorials/findr/13-fault-results.webp", alt: "FINDR fault results with unconfirmed possibilities and supporting observations.", caption: "Use the clues to organise further checks, not to claim a diagnosis." } }
    ]
  },
  {
    id: "save-a-reading", title: "Save one test reading", group: "Fault records",
    goal: "Save a reading with its test point, unit and relevant conditions.", reference: "findr-faults",
    steps: [
      { id: "reading-open", title: "Open Tests & readings", instruction: "From the pal's fault guide, tap Tests & readings.", check: "Fault finding log opens.", image: { src: "assets/tutorials/findr/25-fault-log.webp", alt: "FINDR fault finding log with a saved fictional practice reading.", caption: "A saved reading is separate from a guide answer." } },
      { id: "reading-point", title: "Choose the test point", instruction: "Select Panel, First device, Last device or Another device / point.", check: "The location matches the reading you are recording." },
      { id: "reading-value", title: "Enter the value and unit", instruction: "Enter the actual reading and choose its Unit. For a practice record, label any invented value as a practice example.", check: "Both the value and its unit are correct." },
      { id: "reading-note", title: "Add the conditions", instruction: "Open Add a note when the terminals or test conditions need explaining.", check: "The note gives the reading useful context." },
      { id: "reading-save", title: "Save the reading", instruction: "Tap Save reading and check the new card.", check: "The saved card shows its point, value and time.", hint: "Use Details / correct → Correct reading for a correction. The original stays in the log; readings are not automatically passed." }
    ]
  },
  {
    id: "handover-an-unresolved-fault", title: "Hand over unfinished work", group: "Fault records",
    goal: "Preserve findings and outstanding work without claiming the fault is resolved.", reference: "findr-faults",
    steps: [
      { id: "handover-open", title: "Open Handover", instruction: "In Tests & readings, expand More tools (optional) and choose Handover.", check: "The handover and outcome fields appear.", image: { src: "assets/tutorials/findr/26-call-handover.webp", alt: "FINDR prepared support-call notes for an unresolved practice fault.", caption: "The related call-notes view keeps saved checks and outstanding work together." } },
      { id: "handover-findings", title: "Record the findings", instruction: "Enter what is established, what remains uncertain and the system state left.", check: "The next person can understand the current position." },
      { id: "handover-next", title: "Record the next action", instruction: "Add the outstanding issues and the next engineer's checks or information needed.", check: "The unfinished work is explicit." },
      { id: "handover-save", title: "Save the accurate outcome", instruction: "Keep unresolved work marked unresolved, then tap Save case / handover.", check: "The record is saved without an automatic repair claim.", hint: "Resolved requires findings, confirmed restoration and a recorded passed functional test." },
      { id: "handover-export", title: "Keep the readable report", instruction: "Use Download complete report or Copy complete report. Review it before sharing it yourself.", check: "You have a readable copy outside browser storage.", hint: "Give up → Prepare for call offers separate support-call notes. Neither text export is an editable Pal backup." }
    ]
  },
  {
    id: "practise-vigilon-navigation", title: "Try the GENT Vigilon keys", group: "Practice",
    goal: "Follow a short virtual-panel lesson without changing real equipment.", reference: "findr-emulators",
    steps: [
      { id: "vigilon-open", title: "Open GENT Vigilon", instruction: "Open Emulators and choose GENT Vigilon.", check: "The fictional Vigilon trainer appears.", image: { src: "assets/tutorials/findr/14-emulator-library.webp", alt: "FINDR emulator library with virtual panel choices.", caption: "Choose the trainer before starting a lesson." } },
      { id: "vigilon-lesson", title: "Start the navigation lesson", instruction: "Open Learn and choose SHOW HINTS for Read the panel and follow the soft keys.", check: "The lesson coach shows its first step." },
      { id: "vigilon-status", title: "Check the starting display", instruction: "Read the simulated status and green Power lamp, then tap I've checked this.", check: "The coach moves to opening the menus." },
      { id: "vigilon-menu", title: "Open the menu", instruction: "Press Menu On/Off on the virtual panel.", check: "The current function-key labels appear." },
      { id: "vigilon-info", title: "Choose Info", instruction: "Press F3 while its displayed label is Info.", check: "The Info choices appear.", hint: "Function keys change meaning with their displayed labels." },
      { id: "vigilon-next", title: "Show more choices", instruction: "Press the highlighted key labelled <etc>.", check: "The next group of menu choices appears." },
      { id: "vigilon-return", title: "Return to the status display", instruction: "Press Menu On/Off to abort the menu operation.", check: "The status display returns and the lesson completes.", hint: "This is an on-screen simulation, not a connection to a real panel." }
    ]
  },
  {
    id: "find-a-menu-route", title: "Look up a menu route", group: "Practice",
    goal: "Find a documented route with its model and source references.", reference: "findr-menu-maps",
    steps: [
      { id: "menu-map-open", title: "Open Menu maps", instruction: "Tap Menu maps in the main navigation.", check: "The menu search appears." },
      { id: "menu-map-search", title: "Search the task", instruction: "Enter a menu name, number or task, such as walk test. Choose the correct Panel filter.", check: "The results match that panel family." },
      { id: "menu-map-entry", title: "Open a result", instruction: "Check the model baseline, entry type and Where it sits hierarchy.", check: "The route is shown in its documented context.", image: { src: "assets/tutorials/findr/16-menu-map.webp", alt: "FINDR menu map with a sourced keypad reference.", caption: "Keep the model and source edition with the route." } },
      { id: "menu-map-evidence", title: "Read the evidence", instruction: "Open Check the evidence and inspect the conditions and source page.", check: "You know the route's scope and access requirements.", hint: "Numbers in different menus are not necessarily one continuous shortcut." },
      { id: "menu-map-copy", title: "Keep the reference", instruction: "Tap Copy route + references if you need it in your notes.", check: "The copied route includes its source references." }
    ]
  },
  {
    id: "try-the-battery-calculator", title: "Try a battery calculation", group: "Tools",
    goal: "Check a small worked example and its assumptions.", reference: "findr-toolbox",
    steps: [
      { id: "battery-open", title: "Open the Tool box", instruction: "On Home, tap the small Tool box icon beside the view controls.", check: "The tool list appears." },
      { id: "battery-tool", title: "Choose the calculator", instruction: "Open Fire alarm battery calculator.", check: "The current, duration and factor fields are visible.", image: { src: "assets/tutorials/findr/17-toolbox.webp", alt: "FINDR battery calculator with a worked practice example.", caption: "This 6.25 Ah example follows the stated inputs." } },
      { id: "battery-currents", title: "Enter the practice currents", instruction: "Enter 250 mA standby and 500 mA alarm. Check the units and use total alarm current for this example.", check: "The current fields match the example." },
      { id: "battery-times", title: "Enter the practice durations", instruction: "Use 24 hours standby, 30 minutes alarm and a factor of 1.", check: "The durations and factor match the example.", hint: "Factor 1 is a demonstration input, not a recommended design margin." },
      { id: "battery-calculate", title: "Calculate", instruction: "Tap Calculate.", check: "The example result is 6.25 Ah." },
      { id: "battery-assumptions", title: "Read the assumptions", instruction: "Expand Formula, assumptions & references.", check: "You can see how the estimate was obtained.", hint: "Changing an input clears the old result. This calculation alone is not a complete battery-selection decision." }
    ]
  },
  {
    id: "try-a-resistor-combination", title: "Explore two resistors", group: "Tools",
    goal: "Find two resistors in parallel and inspect the nominal result.", reference: "findr-resistors",
    steps: [
      { id: "resistor-open", title: "Open Resistor lab", instruction: "From Home → Tool box, choose Resistor lab and Find a resistance.", check: "The target and stock fields appear." },
      { id: "resistor-target", title: "Set the target", instruction: "Enter a target of 1.1 kΩ.", check: "The desired resistance is 1.1 kΩ." },
      { id: "resistor-stock", title: "Enter the stock", instruction: "Enter 2.2k x 2 and set Use up to to 2 resistors.", check: "The stock represents two 2.2 kΩ resistors." },
      { id: "resistor-find", title: "Find combinations", instruction: "Tap Find combinations and inspect the parallel result.", check: "Two nominal 2.2 kΩ resistors give 1.1 kΩ in parallel." },
      { id: "resistor-sandbox", title: "Open the arrangement", instruction: "Tap Open in sandbox.", check: "You can inspect or edit the practice circuit.", image: { src: "assets/tutorials/findr/18-resistor-lab.webp", alt: "FINDR Resistor lab with a two-resistor parallel arrangement.", caption: "This is an ideal series/parallel calculation." }, hint: "It does not approve an alarm end-of-line circuit, power rating or equipment compatibility." }
    ]
  },
  {
    id: "try-a-short-quiz", title: "Learn from a short quiz", group: "Practice",
    goal: "Answer a practice question, review a correction and record your understanding.", reference: "findr-quizzes",
    steps: [
      { id: "quiz-open", title: "Open Quizzes", instruction: "Tap Quizzes in the main navigation. Swipe the navigation row left if it is off-screen.", check: "The quiz choices appear." },
      { id: "quiz-section", title: "Choose a section", instruction: "Open By section and tap Start quiz for Standards and certification.", check: "The first section question appears.", image: { src: "assets/tutorials/findr/19-quiz-question.webp", alt: "FINDR section quiz showing answer feedback.", caption: "Short quizzes explain corrections as you go." } },
      { id: "quiz-answer", title: "Choose an answer", instruction: "Read the question and tap your answer.", check: "Immediate feedback appears." },
      { id: "quiz-correction", title: "Check the correction", instruction: "If the answer was wrong, read the highlighted correction and select the correct answer.", check: "The question is completed after any correction.", hint: "Corrections do not rewrite your first-attempt score." },
      { id: "quiz-explanation", title: "Read why", instruction: "Expand Why this answer? and inspect the explanation and references.", check: "You can explain why that answer fits." },
      { id: "quiz-understand", title: "Record your understanding", instruction: "Tap I understand when it makes sense, then move to Next question.", check: "Your learning progress is saved.", hint: "These are unofficial revision questions. A green confidence marker is not a qualification or EPA result." }
    ]
  },
  {
    id: "try-a-full-paper", title: "Start a timed practice paper", group: "Practice",
    goal: "Try a 60-question paper using FINDR's one-hour practice timer.", reference: "findr-papers",
    steps: [
      { id: "paper-open", title: "Open the full papers", instruction: "Choose Quizzes → 10 full papers.", check: "The available papers and practice timing are shown." },
      { id: "paper-start", title: "Start when ready", instruction: "Tap Start paper only when ready for the clock to begin.", check: "The running timer and first question appear.", image: { src: "assets/tutorials/findr/21-full-paper.webp", alt: "FINDR full practice paper with its timer and question navigation.", caption: "Leaving or reloading does not pause this clock." } },
      { id: "paper-answer", title: "Answer or skip", instruction: "Select an answer and tap Next question, or use Skip for now.", check: "The question progress updates without immediate marking." },
      { id: "paper-review", title: "Revisit unanswered questions", instruction: "Expand Questions and choose a question number to review it.", check: "You can change answers before submission." },
      { id: "paper-submit", title: "Submit the paper", instruction: "When finished, choose Submit paper → Submit & see results.", check: "The answers lock and the result appears.", hint: "When time expires, saved choices are finished and unanswered questions score zero." },
      { id: "paper-learn", title: "Review the explanations", instruction: "Read the missed answers and choose what to revise next.", check: "You have identified topics for more practice.", hint: "FINDR's 60-minute format is unofficial practice, not a claim about your EPA's timing, questions or pass prediction." }
    ]
  },
  {
    id: "update-the-browser-app", title: "Check for an app update", group: "App care",
    goal: "Update the existing browser installation and recheck its saved library.", reference: "findr-updates",
    steps: [
      { id: "update-home", title: "Open Home while connected", instruction: "Use the same FINDR site and browser where you saved your files.", check: "Your usual Home screen is open.", image: { src: "assets/tutorials/findr/23-update.webp", alt: "FINDR Home update controls.", caption: "Update the existing installation rather than clearing its storage." } },
      { id: "update-check", title: "Check for an update", instruction: "Tap Update app and wait for its status.", check: "FINDR reports that it is current or prepares an available update.", hint: "Let any active manual download finish, or stop it, before reloading." },
      { id: "update-reload", title: "Apply it if offered", instruction: "Use Reload to finish or Reload FINDR when an update is ready. If already current, continue.", check: "The browser app is open on its current available build." },
      { id: "update-library", title: "Recheck a saved manual", instruction: "Open Saved PDFs and read a file you need.", check: "Your saved library is available.", hint: "Android APK and Play installations have separate update routes. A website reload does not install an Android package." }
    ]
  }
];
