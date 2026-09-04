import { app_shared_error_report_prefix } from "./app_shared_error_report_prefix.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_contact_user_id_storage_key } from "./app_shared_contact_user_id_storage_key.mjs";
import { html_error_records_storage_key } from "./html_error_records_storage_key.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { app_shared_error_report_sent_key } from "./app_shared_error_report_sent_key.mjs";
import { storage_key_name_get } from "./storage_key_name_get.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { firebase_storage_url_upload } from "./firebase_storage_url_upload.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_code_error_send_script() {
  "the few lines baked into every page that send what went wrong up to storage, so that a start-up which never finished can still say why";
  "★ IT IS HERE RATHER THAN IN THE APP BECAUSE THE APP IS WHAT FAILED. The sending used to be started by the boot every app goes through, which meant the one failure worth hearing about most - the boot that died - was the one failure that could never report itself. Its own reasoning said the record would go up on the next load instead; that holds only while some load succeeds, and a device where every load dies sends nothing, ever. Measured 2026-09-04, over a person who could not open an app for a day and a half: not one report arrived, and the whole of what was known about the fault was the four words on their screen.";
  "It sends without the storage library, which is the whole of why it can be here at all. That library is fifty eight KiB and the boot beside this one goes to real trouble not to carry it - so this speaks to storage the way anything else would, over the plain address, and adds nothing to any page. What was said before, that sending needs an initialised connection, was true of the library and never of storage.";
  "It writes to the one folder in storage a browser is allowed to write to at all, under the same name the person's own messages go under, so what broke and what they said about it can be read side by side.";
  "A device that has never got far enough to be given a name sends nothing. That is a first-ever visit which died before anything ran, and a report filed under no name is one nobody can answer; the record still waits in the browser and goes up under the name the next working visit hands out.";
  "It agrees with the app's own sender about what has already gone, by reading and writing the same word, so a page and an app that both notice the same fault send it once between them rather than once each.";
  "Every line is inside a catch that does nothing, and the sending's own failure is caught separately. This is the reporting of a failure and must never become one - a device with storage turned off, or with no network, should see the app it came for and nothing else.";
  arguments_assert(arguments, 0);
  let id_key = app_shared_contact_user_id_storage_key();
  let records_key = html_error_records_storage_key();
  let sender_name = text_frozen("app_shared_error_report_send");
  let sent_word = app_shared_error_report_sent_key();
  let sent_key = storage_key_name_get(sender_name, sent_word);
  let path = app_shared_error_report_prefix();
  let project_url = firebase_storage_url_project_jg();
  let url_start = firebase_storage_url_upload(path, project_url);
  let code = text_combine_multiple([
    "var app_error_sent = false; ",
    "var app_error_send = function () { try { ",
    "if (app_error_sent) { return; } ",
    'var id = window.localStorage.getItem("',
    id_key,
    '"); ',
    "if (!id) { return; } ",
    'var held = window.localStorage.getItem("',
    records_key,
    '"); ',
    "if (!held) { return; } ",
    "var list = JSON.parse(held).value; ",
    "if (!list || !list.length) { return; } ",
    "var right = JSON.stringify(list); ",
    'if (window.localStorage.getItem("',
    sent_key,
    '") === right) { return; } ',
    "app_error_sent = true; ",
    "var body = JSON.stringify({ errors: list, when: new Date().toISOString() }); ",
    'var url = "',
    url_start,
    '" + encodeURIComponent(id) + ".json"; ',
    "var kept = function (response) { ",
    "if (!response || !response.ok) { return; } ",
    'window.localStorage.setItem("',
    sent_key,
    '", right); }; ',
    "var quiet = function () {}; ",
    "fetch(url, { method: 'POST', ",
    "headers: { 'Content-Type': 'application/json' }, ",
    "body: body }).then(kept, quiet); ",
    "} catch (ignored) {} }; ",
  ]);
  return code;
}
