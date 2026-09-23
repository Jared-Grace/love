import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { html_query_property_get } from "./html_query_property_get.mjs";
import { storage_local_name_get } from "./storage_local_name_get.mjs";
import { app_receipts_sync } from "./app_receipts_sync.mjs";
import { html_on_window } from "./html_on_window.mjs";
import { null_is } from "./null_is.mjs";
import { app_receipts_folder_code_valid_is } from "./app_receipts_folder_code_valid_is.mjs";
import { app_receipts_code_screen } from "./app_receipts_code_screen.mjs";
import { storage_local_name_set } from "./storage_local_name_set.mjs";
import { app_receipts_photo_screen } from "./app_receipts_photo_screen.mjs";
export function app_receipts_main(context) {
  "Opens straight onto the camera when a folder code is already known - from the link first, then from this device - and onto the code box only when none is.";
  "A code in the link wins over the one kept here, because a link sent for one folder must send into that folder; it is then kept, so the next opening needs no link.";
  "Pressing the folder's name on the camera screen goes back to the code box, filled with the current code.";
  "Whenever the internet comes back, whatever is waiting on this phone is sent - through the camera screen when it is showing, so its line about what is waiting is redrawn too.";
  let root = property_get(context, "root");
  let app_name = fn_name("app_receipts");
  let key = text_frozen("folder_code");
  let key2 = text_frozen("folder");
  let linked = html_query_property_get(key2);
  let saved = storage_local_name_get(app_name, key);
  let sync_shown = app_receipts_sync;
  function on_online() {
    sync_shown();
  }
  html_on_window("online", on_online);
  let known = linked;
  if (null_is(known)) {
    known = saved;
  }
  if (null_is(known)) {
    known = "";
  }
  known = known.trim();
  if (app_receipts_folder_code_valid_is(known)) {
    on_code(known);
  } else {
    app_receipts_code_screen(root, known, on_code);
  }
  function on_code(folder_code) {
    storage_local_name_set(app_name, key, folder_code);
    sync_shown = app_receipts_photo_screen(root, folder_code, on_change);
  }
  function on_change(folder_code) {
    sync_shown = app_receipts_sync;
    app_receipts_code_screen(root, folder_code, on_code);
  }
}
