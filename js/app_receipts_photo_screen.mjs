import { equal } from "./equal.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_button_wide_camera } from "./app_shared_button_wide_camera.mjs";
import { emoji_camera } from "./emoji_camera.mjs";
import { emoji_sync } from "./emoji_sync.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
import { app_receipts_unsent_all } from "./app_receipts_unsent_all.mjs";
import { list_size } from "./list_size.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_receipts_sync } from "./app_receipts_sync.mjs";
import { html_element } from "./html_element.mjs";
import { html_style_max_width } from "./html_style_max_width.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { app_receipts_upload_path } from "./app_receipts_upload_path.mjs";
import { app_receipts_unsent_add } from "./app_receipts_unsent_add.mjs";
export function app_receipts_photo_screen(root, folder_code, on_change) {
  "$plain root";
  "$plain folder_code";
  "The screen for adding purchases: each photo is kept on this phone first and then sent, so a purchase added with no internet is not lost and goes up once there is.";
  "The line under the buttons always says whether anything is still waiting, and Sync sends it now rather than on the next photo or the next time the internet comes back.";
  "Hands back the function that sends and then redraws that line, so whoever opened the screen can run it when the internet returns.";
  html_clear(root);
  ("The folder is a button so the way to change it is to press the thing that names it; on_change is handed the current code. The pencil comes first because it says what pressing does.");
  function on_folder() {
    on_change(folder_code);
  }
  app_shared_button_wide(root, "✏️ 📁 " + folder_code, on_folder);
  app_shared_button_wide_camera(
    root,
    emoji_camera() + " Add a purchase",
    on_photo,
  );
  app_shared_button_wide(root, emoji_sync() + " Sync", sync_now);
  let status = html_p_text(root, "");
  let shown = html_div(root);
  app_shared_footer(root);
  sync_now();
  async function status_show() {
    let unsent = await app_receipts_unsent_all();
    let count = list_size(unsent);
    if (equal(count, 0)) {
      html_text_set(status, "✅ Everything is sent");
      return;
    }
    html_text_set(
      status,
      "⏳ " +
        count +
        " not sent yet - they will send when there is internet, or press Sync",
    );
  }
  async function sync_now() {
    await status_show();
    await app_receipts_sync();
    await status_show();
  }
  async function on_photo(file) {
    html_clear(shown);
    let picture = html_element(shown, "img");
    html_style_max_width(picture, "100%");
    html_media_source_file_set(picture, file);
    let path = app_receipts_upload_path(file, folder_code);
    await app_receipts_unsent_add(path, file);
    await sync_now();
  }
  return sync_now;
}
