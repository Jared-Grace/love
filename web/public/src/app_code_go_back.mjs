import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { app_replace_button_screen } from "../../../love/public/src/app_replace_button_screen.mjs";
import { app_code_home } from "../../../love/public/src/app_code_home.mjs";
import { emoji_arrow_left } from "../../../love/public/src/emoji_arrow_left.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_go_back(context, root, question_text, button_text) {
  let container3 = app_code_container_light_blue(root);
  let combined2 = text_combine_multiple([
    "Do you want to go back ",
    question_text,
    "?",
  ]);
  html_div_text(container3, combined2);
  let left = emoji_arrow_left();
  let combined = text_combine_multiple([left, "Yes, please ", button_text]);
  let b = app_replace_button_screen(
    context,
    app_code_home,
    container3,
    combined,
  );
  html_width_full(b);
}
