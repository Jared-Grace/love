import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { html_input_label_placeholder_wide } from "./html_input_label_placeholder_wide.mjs";
import { storage_local_name_get } from "./storage_local_name_get.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { storage_local_name_set } from "./storage_local_name_set.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_input_file_camera } from "./html_input_file_camera.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_receipts_folder_code_valid_is } from "./app_receipts_folder_code_valid_is.mjs";
import { html_element } from "./html_element.mjs";
import { html_style_max_width } from "./html_style_max_width.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { app_receipts_upload_path } from "./app_receipts_upload_path.mjs";
import { firebase_upload_blob_browser } from "./firebase_upload_blob_browser.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_receipts_main(context) {
  "Type the folder code, take a photo of a receipt, see it, and send it into that folder.";
  "The code is kept on this device once typed, so the next receipt needs only the photo.";
  let root = property_get(context, "root");
  let app_name = fn_name("app_receipts");
  let key = text_frozen("folder_code");
  let code_input = html_input_label_placeholder_wide(
    root,
    "Folder code",
    "Folder code",
  );
  let saved = storage_local_name_get(app_name, key);
  let b = null_is(saved);
  if (not(b)) {
    html_value_set(code_input, saved);
  }
  function on_code() {
    let typed = html_value_get(code_input);
    let value = typed.trim();
    storage_local_name_set(app_name, key, value);
  }
  html_on_input(code_input, on_code);
  html_p_text(root, "Take a photo of a receipt 🧾");
  html_input_file_camera(root, on_photo);
  let shown = html_div(root);
  app_shared_footer(root);
  async function on_photo(file) {
    html_clear(shown);
    let folder_code = html_value_get(code_input).trim();
    let b2 = app_receipts_folder_code_valid_is(folder_code);
    if (not(b2)) {
      html_p_text(
        shown,
        "⚠️ Type a folder code first - letters, numbers, - and _ only",
      );
      return;
    }
    let picture = html_element(shown, "img");
    html_style_max_width(picture, "100%");
    html_media_source_file_set(picture, file);
    let status = html_p_text(shown, "Sending…");
    let path = app_receipts_upload_path(file, folder_code);
    await firebase_upload_blob_browser(path, file);
    html_text_set(status, "✅ Sent");
  }
}
