/* Curated tasks checked against the Jobs guide and current Timesheets UI. */
(function () {
  'use strict';
  const image = (file, alt, caption) => ({ src: 'assets/tutorials/jobs/' + file, alt, caption });
  window.TutorialTasks = window.TutorialTasks || {};
  window.TutorialTasks.jobs = [
    {
      id: 'jobs-create-site', title: 'Create a site', group: 'Sites and jobs',
      goal: 'Save a site that can hold several visits.', reference: 'jobs-site',
      steps: [
        { id: 'open-sites', title: 'Open Sites', instruction: 'From the Jobs dashboard, tap Sites.', check: 'The site-name and address form is visible.', image: image('01-create-site.webp', 'Jobs site form with a practice name and address.', 'Start with the site name and address.') },
        { id: 'name-site', title: 'Name the site', instruction: 'Enter the Site name. For practice, use Tutorial practice site.', check: 'The name identifies the place you want.' },
        { id: 'enter-address', title: 'Add the address', instruction: 'Enter the site address. Use made-up details for a practice record.', check: 'The address belongs to this site.' },
        { id: 'save-site', title: 'Save the site', instruction: 'Tap Save site.', check: 'The saved site folder opens with a Create job button.', hint: 'A site is the location; Create job starts a separate visit.' }
      ]
    },
    {
      id: 'jobs-site-details', title: 'Edit site contacts', group: 'Sites and jobs',
      goal: 'Keep the reusable contact and access details with the site.', reference: 'jobs-site',
      steps: [
        { id: 'open-folder', title: 'Open the site folder', instruction: 'Open Sites and select the saved site.', check: 'Its name appears at the top.', image: image('02-site-folder.webp', 'Saved Jobs site folder with a Create job button.', 'Site settings are farther down this folder.') },
        { id: 'find-settings', title: 'Find Site settings', instruction: 'Scroll down to Site settings.', check: 'The contact and access fields are available.', hint: 'Edit site opens the drawing connection, not the contact form.' },
        { id: 'edit-contact', title: 'Update the contact', instruction: 'Enter the relevant contact name, phone and email.', check: 'The contact details are correct for this site.' },
        { id: 'edit-access', title: 'Add access details', instruction: 'Record the access hours and procedure that apply.', check: 'The next engineer can understand how to gain access.' },
        { id: 'save-details', title: 'Save site details', instruction: 'Tap Save site details.', check: 'The changes remain when you reopen the site.', hint: 'A visit can keep its own override of these shared settings.' }
      ]
    },
    {
      id: 'jobs-create-job', title: 'Create a job', group: 'Sites and jobs',
      goal: 'Save a visit with its own title and notes.', reference: 'jobs-create',
      steps: [
        { id: 'start-visit', title: 'Create the visit', instruction: 'In the site folder, tap Create job.', check: 'The job opens in Notes and is linked to the site.' },
        { id: 'name-visit', title: 'Enter a job title', instruction: 'Give this visit a clear Job title, such as Routine service — tutorial.', check: 'The title describes this visit.', image: image('03-create-job.webp', 'Jobs Notes tab with a practice visit title and notes.', 'Notes belong to this visit.') },
        { id: 'write-notes', title: 'Write the visit notes', instruction: 'Record what the visit is for and what you have done. Label practice notes as a tutorial example.', check: 'The notes describe the work accurately.' },
        { id: 'save-job', title: 'Save the job', instruction: 'Tap Save and wait for the saved confirmation.', check: 'You can reopen the saved visit.', hint: 'A new unsaved note is not yet a saved job.' }
      ]
    },
    {
      id: 'jobs-edit-details', title: 'Edit job details', group: 'Sites and jobs',
      goal: 'Set the site, system and visit details for this job.', reference: 'jobs-details',
      steps: [
        { id: 'open-settings', title: 'Open job settings', instruction: 'Open the job and tap its gear button.', check: 'Job settings opens.', image: image('04-job-settings.webp', 'Jobs settings with Site, title, status and More details.', 'The gear opens the visit settings.') },
        { id: 'check-site', title: 'Check the linked site', instruction: 'Check Site, the job title and status. Change them if needed.', check: 'This job belongs to the intended site.' },
        { id: 'expand-details', title: 'Open More details', instruction: 'Expand More details.', check: 'Discipline and visit fields appear.', image: image('04b-more-details.webp', 'Expanded job settings for a Fire maintenance visit.', 'Choose the system and type for the actual visit.') },
        { id: 'choose-system', title: 'Choose the discipline', instruction: 'Select Fire, Security, Intruder, CCTV, Access control or Custom as appropriate.', check: 'The discipline matches the work.' },
        { id: 'complete-visit', title: 'Complete the visit fields', instruction: 'Choose the job type and enter the engineer, reference and scope for this visit.', check: 'The details describe the intended visit.', hint: 'A Custom choice needs its own name.' },
        { id: 'save-settings', title: 'Save settings', instruction: 'Tap Save settings.', check: 'The details remain when you reopen settings.', hint: 'Changing a job does not rewrite an already issued certificate.' }
      ]
    },
    {
      id: 'jobs-create-asset', title: 'Add an asset', group: 'Equipment',
      goal: 'Add equipment directly to a saved job.', reference: 'jobs-assets',
      steps: [
        { id: 'open-assets', title: 'Open Assets', instruction: 'Open the saved job and choose Assets.', check: 'The equipment register is visible.' },
        { id: 'start-asset', title: 'Create an asset', instruction: 'Tap + Create asset.', check: 'The equipment form opens.', image: image('05-create-asset.webp', 'Create asset form for practice equipment MCP-01.', 'Give each item its own reference.') },
        { id: 'enter-reference', title: 'Enter its reference', instruction: 'Enter a unique Asset reference, such as MCP-01.', check: 'The reference identifies this item.' },
        { id: 'choose-type', title: 'Choose its type', instruction: 'Select Equipment type. For Custom equipment, enter the custom type name.', check: 'The type describes the equipment.' },
        { id: 'add-location', title: 'Add its location', instruction: 'Choose a floor and enter the location if useful. Equipment details holds optional manufacturer and model fields.', check: 'The equipment can be identified on site.' },
        { id: 'save-asset', title: 'Add the asset', instruction: 'Tap Add asset.', check: 'The new item appears as Not tested.', hint: 'A manual asset is not automatically placed on a drawing.' }
      ]
    },
    {
      id: 'jobs-find-reference', title: 'Find an asset by reference', group: 'Equipment',
      goal: 'Find the correct equipment without treating a name as a verified loop.', reference: 'jobs-revisions',
      steps: [
        { id: 'open-register', title: 'Open the register', instruction: 'Open the saved job’s Assets tab.', check: 'Search assets is available.' },
        { id: 'search-reference', title: 'Search its reference', instruction: 'Enter part of the reference or location in Search assets. The example uses Z1.', check: 'Matching items remain in the list.', image: image('09-asset-references.webp', 'Jobs equipment list filtered by the Z1 reference.', 'Search uses the references recorded on the equipment.') },
        { id: 'check-identity', title: 'Check the item', instruction: 'Compare its reference, equipment type and floor with the actual equipment.', check: 'You have identified the intended asset.', hint: 'An L1 prefix does not set a verified loop or address; there is no separate sort-by-loop control here.' },
        { id: 'clear-search', title: 'Show all assets again', instruction: 'Clear Search assets when you need the full register.', check: 'The other assets return to the list.' }
      ]
    },
    {
      id: 'jobs-import-zone-plan', title: 'Import a Zone Sketch plan', group: 'Drawings',
      goal: 'Bring the building and its existing devices into a saved visit.', reference: 'jobs-import',
      steps: [
        { id: 'get-backup', title: 'Save the editable drawing', instruction: 'In Zone Sketch, use Project → Save editable backup.', check: 'You have the .zonesketch.json file.', hint: 'Use the editable file, not a screenshot or PDF.' },
        { id: 'open-import', title: 'Open Import plan', instruction: 'In the saved Jobs visit, choose Assets → Import plan.', check: 'You can choose a drawing file.' },
        { id: 'choose-file', title: 'Choose the backup', instruction: 'Select the .zonesketch.json file you saved.', check: 'Jobs shows an import review.' },
        { id: 'review-mapping', title: 'Check the site mapping', instruction: 'Check that the import uses this visit’s linked site.', check: 'The correct site is shown.', image: image('07-import-review.webp', 'Zone Sketch import review with site mapping and equipment counts.', 'Review the mapping and warnings before applying the file.') },
        { id: 'review-devices', title: 'Review the equipment', instruction: 'Check floors, device changes and warnings. Do not assume missing loop, address or model details.', check: 'You understand what the import will add or change.' },
        { id: 'apply-plan', title: 'Apply the plan', instruction: 'Tap Apply plan to job.', check: 'View plan shows the drawing and Assets contains its equipment.', image: image('08-imported-plan.webp', 'Imported building and devices in the Jobs plan viewer.', 'New visit results start as Not tested.') }
      ]
    },
    {
      id: 'jobs-update-imported-plan', title: 'Update a name or drawing', group: 'Drawings',
      goal: 'Review a revised drawing while preserving matched device results.', reference: 'jobs-revisions',
      steps: [
        { id: 'back-up-visit', title: 'Back up the job', instruction: 'In Finalisation, use Export job before changing the drawing.', check: 'The current .jobs.json backup is saved.' },
        { id: 'open-source', title: 'Open the editable drawing', instruction: 'Open the original project in Zone Sketch. Jobs’ Drawing tools → Export editable drawing can provide a working copy.', check: 'You are editing the existing project.' },
        { id: 'edit-existing', title: 'Edit the existing device', instruction: 'For a name change, edit Properties → Device reference on the existing device.', check: 'Its reference is corrected without replacing the object.', hint: 'Keep the existing device identity; the Jobs defect pencil is not a rename control.', image: { src: 'assets/tutorials/zone-sketch/15-device-reference.webp', alt: 'Zone Sketch Properties with a manual device reference.', caption: 'Change the existing object’s reference in Zone Sketch.' } },
        { id: 'export-revision', title: 'Save a fresh backup', instruction: 'Use Project → Save editable backup in Zone Sketch.', check: 'You have the revised .zonesketch.json file.' },
        { id: 'review-reimport', title: 'Review it in Jobs', instruction: 'Inside the same visit, use Import Zone Sketch plan and choose the revised file.', check: 'Matched, added and removed devices are listed.' },
        { id: 'apply-revision', title: 'Apply the reviewed changes', instruction: 'Check the device matches, then tap Apply plan to job.', check: 'The visit uses the reviewed drawing revision.' },
        { id: 'check-results', title: 'Recheck the register', instruction: 'Find the edited device and reopen its saved record.', check: 'Matched devices retain results; added devices start Not tested.', hint: 'Evidence for removed devices is archived. A site-only import does not update every earlier visit.' }
      ]
    },
    {
      id: 'jobs-record-pass', title: 'Record a quick Pass', group: 'Tests and defects',
      goal: 'Record one equipment result during a walk test.', reference: 'jobs-results',
      steps: [
        { id: 'find-equipment', title: 'Find the asset', instruction: 'Open Assets and search for the equipment reference or location.', check: 'The correct asset is visible.', image: image('15-quick-pass-fail.webp', 'Asset register with Pass, Fail and N/A buttons.', 'Each quick result belongs to its own asset.') },
        { id: 'test-equipment', title: 'Carry out the test', instruction: 'Check the reference against the actual device and carry out the required test.', check: 'You know this device’s result.', hint: 'There is no separate Walk test button. Untested equipment stays Not tested.' },
        { id: 'record-pass', title: 'Tap Pass', instruction: 'If the equipment passed, tap its Pass button.', check: 'The saved result becomes Satisfactory for this visit.' },
        { id: 'check-save', title: 'Check the saved result', instruction: 'Wait for the saved status before moving to the next item.', check: 'The pass is still shown on the intended asset.' }
      ]
    },
    {
      id: 'jobs-record-fail', title: 'Record a failure', group: 'Tests and defects',
      goal: 'Save a failed result with an explanation of the finding.', reference: 'jobs-results',
      steps: [
        { id: 'choose-failed-item', title: 'Find the failed asset', instruction: 'Open Assets and confirm the equipment reference you tested.', check: 'You are using the correct asset’s controls.' },
        { id: 'tap-fail', title: 'Tap Fail', instruction: 'Tap Fail on that asset.', check: 'A reason form opens if an explanation is needed.', image: image('16-fail-reason.webp', 'Inline failure explanation form with Save result.', 'Explain the finding before saving the result.') },
        { id: 'explain-finding', title: 'Explain what failed', instruction: 'Describe what happened and what should have happened. If existing evidence allowed an immediate save, check that it still describes this finding.', check: 'The saved or entered explanation fits today’s test.' },
        { id: 'save-failure', title: 'Save the result', instruction: 'Tap Save result if the reason form is open.', check: 'The asset shows Unsatisfactory.', hint: 'A defect remark is a separate record; add one when more detail or follow-up is needed.' }
      ]
    },
    {
      id: 'jobs-review-failed-assets', title: 'Find failures and untested items', group: 'Tests and defects',
      goal: 'Review outstanding equipment in a job with a plan.', reference: 'jobs-results',
      steps: [
        { id: 'open-devices', title: 'Open the device list', instruction: 'From Assets, open View plan, then Devices.', check: 'The searchable device list is visible.' },
        { id: 'filter-failures', title: 'Show failed equipment', instruction: 'Set Result to Unsatisfactory.', check: 'The failed devices are listed.', image: image('18-failed-assets.webp', 'Device list filtered to Unsatisfactory.', 'The Result filter finds failed equipment.') },
        { id: 'read-record', title: 'Open a failed record', instruction: 'Open the relevant device and read its result, notes and evidence.', check: 'The finding is tied to the correct equipment reference.' },
        { id: 'filter-untested', title: 'Show untested equipment', instruction: 'Return to the list and change Result to Not tested.', check: 'Equipment still awaiting a result is listed.', hint: 'N/A means Not applicable; it does not mean not tested.' }
      ]
    },
    {
      id: 'jobs-add-defect', title: 'Add a defect remark', group: 'Tests and defects',
      goal: 'Attach a clear finding and recommendation to the correct asset.', reference: 'jobs-defects',
      steps: [
        { id: 'save-test-first', title: 'Save the test result', instruction: 'Save the asset’s actual test result before opening a remark.', check: 'No result change is waiting to be saved.' },
        { id: 'open-defects', title: 'Open Defects', instruction: 'Tap the asset’s pencil.', check: 'Defects opens for the intended equipment.', image: image('17-open-defect.webp', 'A saved Open Major defect on a practice asset.', 'A remark belongs to the selected asset.') },
        { id: 'start-remark', title: 'Add a remark', instruction: 'Choose Add remark and a suitable starting point, such as Custom note.', check: 'The remark form is open.' },
        { id: 'describe-defect', title: 'Describe the finding', instruction: 'Enter a clear Remark title, Location and Description.', check: 'The finding identifies what is wrong and where.', image: image('17b-defect-photo-details.webp', 'Remark details and Before photos controls.', 'Use this device’s actual finding and evidence.') },
        { id: 'set-severity', title: 'Choose the severity', instruction: 'Choose the appropriate Severity for this finding.', check: 'The classification reflects the actual defect.' },
        { id: 'add-evidence', title: 'Add useful evidence', instruction: 'Add relevant Before photos and a Recommendation. Keep Remark status Open while the issue remains outstanding.', check: 'The record explains the finding and next action.' },
        { id: 'save-remark', title: 'Save the remark', instruction: 'Tap Save remark.', check: 'The remark appears on this asset.', hint: 'Saving a remark does not change the equipment’s test result.' }
      ]
    },
    {
      id: 'jobs-record-repair', title: 'Record a repair and retest', group: 'Tests and defects',
      goal: 'Keep the repair record and latest test outcome up to date.', reference: 'jobs-defects',
      steps: [
        { id: 'edit-finding', title: 'Edit the saved remark', instruction: 'Open the asset’s saved defect and choose its edit action.', check: 'The original finding is visible.' },
        { id: 'record-repair', title: 'Record the repair', instruction: 'Describe the work carried out and add useful Resolved photos.', check: 'The record explains what changed.', image: image('17c-defect-resolution.webp', 'Remark recommendation, resolution photos and status controls.', 'Record the repair before changing the remark status.') },
        { id: 'resolve-remark', title: 'Resolve the remark', instruction: 'When the issue is resolved, set Remark status to Resolved and tap Save remark.', check: 'The remark is saved as Resolved.' },
        { id: 'retest-device', title: 'Retest the equipment', instruction: 'Carry out the required retest.', check: 'You know the equipment’s current result.' },
        { id: 'save-retest', title: 'Save today’s result', instruction: 'Record the actual retest result, update its explanation and tap Save result.', check: 'The latest result and retest explanation are saved.', hint: 'Resolving a remark does not automatically change a failed result.' },
        { id: 'review-both', title: 'Reopen the record', instruction: 'Check both the remark and Today’s result.', check: 'The failure, repair and retest can be understood together.' }
      ]
    },
    {
      id: 'jobs-favourite-asset', title: 'Reuse an equipment favourite', group: 'Shortcuts',
      goal: 'Create a fresh asset from a saved equipment specification.', reference: 'jobs-favourites',
      steps: [
        { id: 'save-favourite', title: 'Favourite the equipment', instruction: 'In Assets, tap Favourite on equipment whose details you want to reuse.', check: 'The specification is saved as a favourite.' },
        { id: 'open-favourites', title: 'Open Favourite assets', instruction: 'Expand Favourite assets in the job where you want a new item.', check: 'The saved specification is listed.', image: image('19-asset-favourite.webp', 'Favourite equipment specification with a Use action.', 'A favourite reuses equipment details.') },
        { id: 'use-specification', title: 'Use the favourite', instruction: 'Tap Use on the intended specification.', check: 'A new asset form opens.' },
        { id: 'name-new-item', title: 'Give it a new reference', instruction: 'Enter this item’s own Asset reference and location.', check: 'The new item has its own identity.', image: image('19b-favourite-new-asset.webp', 'New asset reference field after choosing a favourite.', 'Each new item needs a separate reference.') },
        { id: 'check-specification', title: 'Check its details', instruction: 'Check the type, manufacturer and model against the actual equipment.', check: 'The copied details fit this item.' },
        { id: 'add-favourite-asset', title: 'Add the new asset', instruction: 'Tap Add asset.', check: 'A separate asset appears as Not tested.', hint: 'Previous results, photos, defects and plan positions are not copied.' }
      ]
    },
    {
      id: 'jobs-favourite-defect', title: 'Reuse saved defect wording', group: 'Shortcuts',
      goal: 'Start a new remark from wording you have saved before.', reference: 'jobs-favourites',
      steps: [
        { id: 'save-wording', title: 'Favourite a saved remark', instruction: 'On the original saved remark, tap its star button.', check: 'Its wording is available as a quick defect.' },
        { id: 'open-new-remark', title: 'Open the new asset', instruction: 'On the next relevant device, choose Defects → Add remark.', check: 'You are adding a remark to the correct device.' },
        { id: 'choose-quick-defect', title: 'Choose the saved wording', instruction: 'Under Saved quick defects, tap Add beside the wording you need.', check: 'The remark fields are filled from that shortcut.', image: image('20-saved-defect.webp', 'Saved quick defect wording with an Add action.', 'Use the wording as a starting point.') },
        { id: 'adapt-wording', title: 'Check the wording', instruction: 'Edit the title, description, severity and recommendation for this finding.', check: 'The wording describes the actual device and issue.' },
        { id: 'add-fresh-evidence', title: 'Add this device’s evidence', instruction: 'Enter its location and add any relevant new pictures.', check: 'The evidence belongs to this device.' },
        { id: 'save-new-remark', title: 'Save the remark', instruction: 'Tap Save remark.', check: 'A new Open remark is saved on the selected asset.', hint: 'The shortcut does not copy repair history or change the device result.' }
      ]
    },
    {
      id: 'jobs-save-certificate-draft', title: 'Save a certificate draft', group: 'Certificates',
      goal: 'Create or edit the visit certificate for the actual system and work.', reference: 'jobs-certificates',
      steps: [
        { id: 'save-evidence', title: 'Save the visit’s work', instruction: 'Save notes, settings, asset results and any maintenance answers before preparing the document.', check: 'The supporting work is saved.' },
        { id: 'open-draft', title: 'Open a certificate draft', instruction: 'In Finalisation, tap Create certificate. If a Certificate draft already exists, edit it there.', check: 'The editable draft is open.', image: image('11-certificate-draft.webp', 'Editable Jobs certificate draft.', 'The draft can be saved before every field is complete.') },
        { id: 'check-document', title: 'Check the visit details', instruction: 'Check the title, number, discipline and visit date.', check: 'The document describes the actual system and visit.', hint: 'Certificates are available for Fire, Security/Intruder, CCTV, Access Control and Custom visits.' },
        { id: 'fill-parties', title: 'Check the parties', instruction: 'Complete the site, customer and issuing company details. Check the customer email.', check: 'The people and premises are identified correctly.' },
        { id: 'describe-work', title: 'Describe the work', instruction: 'Record the scope, work done, findings, limitations and condition left.', check: 'The draft says what this visit covered.' },
        { id: 'read-declaration', title: 'Read the declaration', instruction: 'Read the Engineer declaration and enter the declaring engineer’s name.', check: 'The declaration and name are correct for this visit.' },
        { id: 'save-draft', title: 'Save the draft', instruction: 'Tap Save draft.', check: 'The editable draft is saved.', hint: 'A saved draft is not an issued certificate; changes need a fresh review before issue.' }
      ]
    },
    {
      id: 'jobs-issue-certificate', title: 'Review and issue a certificate', group: 'Certificates',
      goal: 'Save an issued copy after checking the visit’s details and evidence.', reference: 'jobs-certificates',
      steps: [
        { id: 'open-review', title: 'Review the draft', instruction: 'Open the saved draft in Finalisation and tap Review certificate.', check: 'The preview and review information appear.' },
        { id: 'check-preview', title: 'Read the preview', instruction: 'Check the details, missing information, recorded limitations and supporting evidence.', check: 'You understand what this certificate will contain.' },
        { id: 'correct-draft', title: 'Correct anything needed', instruction: 'Use Back to editing if needed, then review the corrected draft again.', check: 'The reviewed details are ready to issue.', hint: 'Untested equipment and outstanding defects remain part of the recorded evidence.' },
        { id: 'confirm-review', title: 'Confirm the review', instruction: 'Tick the confirmation after checking this visit’s certificate and saved work.', check: 'The review confirmation is selected.' },
        { id: 'issue-certificate', title: 'Issue the certificate', instruction: 'Tap Issue certificate.', check: 'The document appears under Issued certificates.', image: image('12-issued-certificate.webp', 'Saved issued certificate with issue selector and document actions.', 'An issued copy keeps the details and evidence recorded at issue.') }
      ]
    },
    {
      id: 'jobs-revise-certificate', title: 'Correct an issued certificate', group: 'Certificates',
      goal: 'Issue a corrected revision while keeping the earlier document.', reference: 'jobs-certificate-edit',
      steps: [
        { id: 'save-corrections', title: 'Save corrected job evidence', instruction: 'Save any changes to notes, results or customer details first.', check: 'The corrected supporting work is saved.' },
        { id: 'choose-old-issue', title: 'Choose the issue', instruction: 'In Finalisation → Issued certificates, select the document to correct.', check: 'The intended certificate is selected.' },
        { id: 'start-revision', title: 'Create a revision', instruction: 'Tap Revise certificate.', check: 'A new editable draft opens.', image: image('13-certificate-revision.webp', 'New certificate draft revision with its revision number.', 'The earlier issued certificate is retained.') },
        { id: 'edit-revision', title: 'Make the correction', instruction: 'Edit the draft and check its new number and issue date. Describe the correction clearly.', check: 'The revision contains the intended change.' },
        { id: 'review-revision', title: 'Review the revision', instruction: 'Review the corrected document and current saved evidence, then confirm the review.', check: 'The new revision has been checked.' },
        { id: 'issue-revision', title: 'Issue the revision', instruction: 'Tap Issue certificate and select the new issue before sharing.', check: 'Both the earlier issue and the revision remain available.', image: image('13b-certificate-history.webp', 'Certificate issue selector containing retained earlier issues.', 'Choose the new issue when sharing the correction.') }
      ]
    },
    {
      id: 'jobs-share-certificate', title: 'Download or share a PDF', group: 'Certificates',
      goal: 'Prepare the correct issued certificate for the customer.', reference: 'jobs-share',
      steps: [
        { id: 'choose-certificate', title: 'Choose the right issue', instruction: 'Open Finalisation → Issued certificates and select the intended issue.', check: 'The correct certificate number is selected.', image: image('12-issued-certificate.webp', 'Issued certificate actions including Download PDF and Share PDF.', 'Use the issued-certificate actions for the customer document.') },
        { id: 'download-pdf', title: 'Download the PDF', instruction: 'Tap Download PDF and save the file.', check: 'The certificate PDF is available on your device.' },
        { id: 'check-pdf', title: 'Check the PDF', instruction: 'Open it and check the site, number, dates and supporting pages.', check: 'The file is the document you intend to send.', image: image('14-certificate-pdf.webp', 'First page of the actual exported practice certificate PDF.', 'Check the saved PDF before sending it.') },
        { id: 'open-share', title: 'Open the sharing options', instruction: 'Tap Share PDF on that issue and choose your email app.', check: 'Your email app has the PDF ready to attach or send.', hint: 'If file sharing is unavailable, attach the downloaded PDF yourself.' },
        { id: 'check-recipient', title: 'Check before sending', instruction: 'Check the recipient, subject and attachment in your email app. Send when the message is ready.', check: 'You control which document and recipient are used.', hint: 'Jobs prepares the file; it does not send the email automatically.' }
      ]
    },
    {
      id: 'jobs-backup-job', title: 'Back up an editable job', group: 'Backups',
      goal: 'Keep the visit’s editable records as well as its PDF.', reference: 'jobs-backup',
      steps: [
        { id: 'save-changes', title: 'Save pending changes', instruction: 'Save the job’s notes, settings, results and certificate changes.', check: 'The latest work is saved.' },
        { id: 'export-job', title: 'Export the job', instruction: 'Open Finalisation and tap Export job.', check: 'The editable job package downloads.', image: image('12-issued-certificate.webp', 'Finalisation showing Export job above the certificate section.', 'Export job keeps the editable visit.') },
        { id: 'keep-file', title: 'Keep the backup file', instruction: 'Save the .jobs.json file in a separate backup location.', check: 'You can find the editable backup later.', hint: 'The PDF alone is not an editable job backup.' },
        { id: 'import-copy', title: 'Reopen a backup when needed', instruction: 'On the destination device, use Import job and select the .jobs.json file.', check: 'The imported visit opens for review.' },
        { id: 'check-import', title: 'Check the imported visit', instruction: 'Open its site, plan, assets and certificate history.', check: 'The intended visit and records are present.', hint: 'An identical import reopens the existing job; a conflicting version is kept separately.' }
      ]
    },
    {
      id: 'jobs-backup-workspace', title: 'Back up the workspace', group: 'Backups',
      goal: 'Keep sites and reusable favourites in a workspace backup.', reference: 'jobs-backup',
      steps: [
        { id: 'save-current-work', title: 'Save your current work', instruction: 'Save any open job or site changes before backing up.', check: 'The workspace contains the latest saved records.', image: image('02-site-folder.webp', 'Saved site folder with its visits and site plan.', 'A workspace backup also keeps sites without visits.') },
        { id: 'open-data-tools', title: 'Open Help & data', instruction: 'On a phone, open Home → About → Help & data. On a larger screen, use Help & data in the sidebar.', check: 'The workspace backup tools are available.' },
        { id: 'export-workspace', title: 'Export the workspace', instruction: 'Choose Export workspace backup.', check: 'A workspace backup file downloads.', hint: 'This keeps the separate asset-favourite and quick-defect libraries too.' },
        { id: 'store-workspace', title: 'Keep the file separately', instruction: 'Save the downloaded file somewhere you can find it on another device.', check: 'You have a copy outside the current Jobs workspace.', hint: 'Restore workspace backup is for an empty workspace. Use Import job to combine individual visits with existing work.' }
      ]
    },
    {
      id: 'jobs-log-time', title: 'Log time against a job', group: 'Timesheets',
      goal: 'Save a timed session linked to the correct job.',
      steps: [
        { id: 'open-timesheets', title: 'Open Timesheets', instruction: 'From Home, open Timesheets.', check: 'The daily calendar is visible.', image: image('21-timesheets.png', 'Actual Jobs Timesheets calendar with a fictional Work session.', 'The example shows a locally saved 09:00–11:30 session.') },
        { id: 'add-session', title: 'Add a session', instruction: 'Select the correct day, then tap + / Add session.', check: 'The Add session editor opens.' },
        { id: 'choose-job', title: 'Choose the job', instruction: 'Select the intended visit in Task / job.', check: 'The site and job match the work being recorded.' },
        { id: 'choose-time-type', title: 'Choose the time type', instruction: 'Choose Work, or the other type that describes this session.', check: 'The session has the appropriate type.' },
        { id: 'enter-start', title: 'Enter the start', instruction: 'Enter the actual Start date and time.', check: 'The start is correct.', image: image('22-timesheet-entry.png', 'Actual Edit session form showing job, Work, Start and Finish fields.', 'The same fields are used to add or edit a session.') },
        { id: 'enter-finish', title: 'Enter the finish', instruction: 'Enter the actual Finish date and time, then check Calculated duration.', check: 'The duration matches the recorded interval.', hint: 'For practice, 09:00 to 11:30 on the same day shows 2:30. Choose the next date explicitly for an overnight finish.' },
        { id: 'save-time', title: 'Save the session', instruction: 'Tap Save session.', check: 'The session appears on the selected day.', hint: 'Tap the saved session to edit it. Saving time does not send it to an office or mark a job complete.' }
      ]
    }
  ];
})();
