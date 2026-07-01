import { app_replace_button_screen_wide } from "../../../love/public/src/app_replace_button_screen_wide.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_quiz } from "../../../love/public/src/app_code_quiz.mjs";
import { emoji_repeat_1 } from "../../../love/public/src/emoji_repeat_1.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { text_pad_nested_space_quote_double } from "../../../love/public/src/text_pad_nested_space_quote_double.mjs";
import { app_karate_button_next_text } from "../../../love/public/src/app_karate_button_next_text.mjs";
export function app_code_next(
  context,
  parent,
  do_you_want_to_text,
  yes_text,
  refresh,
) {
  let container = app_code_container_light_blue(parent);
  let nt = app_karate_button_next_text();
  let padded3 = text_pad_nested_space_quote_double(nt);
  let combined3 = text_combine_multiple([
    "Do you want to ",
    do_you_want_to_text,
    "? If not, choose: ",
    padded3,
  ]);
  html_div_text(container, combined3);
  let left = emoji_repeat_1();
  let combined = text_combine_multiple([left, "Yes, ", yes_text]);
  app_replace_button_wide(container, combined, refresh);
  let next = app_replace_button_screen_wide(context, app_code_quiz, parent, nt);
  return container;
}
