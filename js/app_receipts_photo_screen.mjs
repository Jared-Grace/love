import { html_clear } from "./html_clear.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_input_file_camera } from "./html_input_file_camera.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
import { html_element } from "./html_element.mjs";
import { html_style_max_width } from "./html_style_max_width.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { app_receipts_upload_path } from "./app_receipts_upload_path.mjs";
import { firebase_upload_blob_browser } from "./firebase_upload_blob_browser.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_receipts_photo_screen(root, folder_code) {
  "$plain root";
  "$plain folder_code";
  "The second screen: take a photo of a receipt, see it, and send it into the folder whose code was typed on the first screen.";
  html_clear(root);
  html_p_text(root, "Folder: " + folder_code);
  html_p_text(root, "Take a photo of a receipt 🧾");
  html_input_file_camera(root, on_photo);
  let shown = html_div(root);
  app_shared_footer(root);
  async function on_photo(file) {
    html_clear(shown);
    let picture = html_element(shown, "img");
    html_style_max_width(picture, "100%");
    html_media_source_file_set(picture, file);
    let status = html_p_text(shown, "Sending…");
    let path = app_receipts_upload_path(file, folder_code);
    await firebase_upload_blob_browser(path, file);
    html_text_set(status, "✅ Sent");
  }
}
