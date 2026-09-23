import { not } from "./not.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_input_label_placeholder_wide } from "./html_input_label_placeholder_wide.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_focus } from "./html_focus.mjs";
import { html_on_enter } from "./html_on_enter.mjs";
import { app_shared_button_wide_next } from "./app_shared_button_wide_next.mjs";
import { html_div } from "./html_div.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { app_receipts_folder_code_valid_is } from "./app_receipts_folder_code_valid_is.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_receipts_code_screen(root, prefill, on_code) {
  "$plain root";
  "$plain prefill";
  "The screen that asks for the folder code and nothing else, so the one thing a person must do first is the only thing they see.";
  "on_code is handed the code only once it is one a folder can be named by; anything else leaves the person here with a line saying what is allowed.";
  html_clear(root);
  let code_input = html_input_label_placeholder_wide(
    root,
    "Folder code",
    "Folder code",
  );
  html_value_set(code_input, prefill);
  html_focus(code_input);
  html_on_enter(code_input, on_next);
  app_shared_button_wide_next(root, on_next);
  let warning = html_div(root);
  function on_next() {
    html_clear(warning);
    let folder_code = html_value_get(code_input).trim();
    let b = app_receipts_folder_code_valid_is(folder_code);
    if (not(b)) {
      html_p_text(
        warning,
        "⚠️ Type a folder code - letters, numbers, - and _ only",
      );
      return;
    }
    on_code(folder_code);
  }
}
