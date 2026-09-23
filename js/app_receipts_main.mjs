import { html_focus } from "./html_focus.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { html_input_label_placeholder_wide } from "./html_input_label_placeholder_wide.mjs";
import { storage_local_name_get } from "./storage_local_name_get.mjs";
import { null_is } from "./null_is.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_on_enter } from "./html_on_enter.mjs";
import { app_shared_button_wide_next } from "./app_shared_button_wide_next.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { app_receipts_folder_code_valid_is } from "./app_receipts_folder_code_valid_is.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { storage_local_name_set } from "./storage_local_name_set.mjs";
import { app_receipts_photo_screen } from "./app_receipts_photo_screen.mjs";
export function app_receipts_main(context) {
  "The first screen is only the folder code and Next, so the one thing a person must do before anything else is the only thing they see.";
  "The code is kept on this device once accepted, so next time the box arrives already filled and Next is one press.";
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
  html_focus(code_input);
  html_on_enter(code_input, on_next);
  app_shared_button_wide_next(root, on_next);
  let warning = html_div(root);
  function on_next() {
    html_clear(warning);
    let folder_code = html_value_get(code_input).trim();
    let b2 = app_receipts_folder_code_valid_is(folder_code);
    if (not(b2)) {
      html_p_text(
        warning,
        "⚠️ Type a folder code - letters, numbers, - and _ only",
      );
      return;
    }
    storage_local_name_set(app_name, key, folder_code);
    app_receipts_photo_screen(root, folder_code);
  }
}
