import { property_get } from "../../../love/public/src/property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { emoji_arrow_left } from "../../../love/public/src/emoji_arrow_left.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_go_back(root, question_text, buttons) {
  let container = app_code_container_light_blue(root);
  let combined2 = text_combine_multiple([
    "Do you want to go back ",
    question_text,
    "?",
  ]);
  html_div_text(container, combined2);
  let left = emoji_arrow_left();
  function lambda(b) {
    let button_text = property_get(b, "text");
    let on_click = property_get(b, "on_click");
    let combined = text_combine_multiple([left, " Yes, please ", button_text]);
    app_replace_button_wide(container, combined, on_click);
  }
  each(buttons, lambda);
}
