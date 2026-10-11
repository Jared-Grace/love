import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { app_shared_mobile_default_font_size } from "./app_shared_mobile_default_font_size.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_receipts_folder_known } from "./app_receipts_folder_known.mjs";
import { app_receipts_folder_code_valid_is } from "./app_receipts_folder_code_valid_is.mjs";
import { app_receipts_code_screen } from "./app_receipts_code_screen.mjs";
import { storage_local_name_set } from "./storage_local_name_set.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
import { app_receipts_view_screen } from "./app_receipts_view_screen.mjs";
export function app_receipts_view_main(context) {
  "The receipts app for looking only: it opens one folder's purchases, a day to a card, and any one of them whole, but nothing can be added, typed, marked or sent from it, so a link to it can go to someone who should see the receipts and not change them.";
  "The folder comes the way the receipts app finds it - the link first, then this device - and the code box shows only when none is known. The address in the bar always names the folder, so it opens the same folder when sent.";
  app_shared_app_fn_set(context, app_receipts_view_main);
  app_shared_mobile_default_font_size(context);
  let root = property_get(context, "root");
  let app_name = fn_name("app_receipts_view");
  let known = app_receipts_folder_known(app_name);
  if (app_receipts_folder_code_valid_is(known)) {
    on_code(known);
  } else {
    app_receipts_code_screen(root, known, on_code);
  }
  async function on_code(folder_code) {
    let key = text_frozen("folder_code");
    storage_local_name_set(app_name, key, folder_code);
    let property_name = text_frozen("folder");
    html_hash_property_set(property_name, folder_code);
    await app_receipts_view_screen(root, folder_code, on_change);
  }
  function on_change(folder_code) {
    app_receipts_code_screen(root, folder_code, on_code);
  }
}
