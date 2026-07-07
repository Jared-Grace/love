import { html_div } from "../../../love/public/src/html_div.mjs";
import { text_combine_middle_space } from "../../../love/public/src/text_combine_middle_space.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { app_shared_button_back_text } from "../../../love/public/src/app_shared_button_back_text.mjs";
import { text_pad_space_quote_double } from "../../../love/public/src/text_pad_space_quote_double.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { emoji_repeat_1 } from "../../../love/public/src/emoji_repeat_1.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { app_shared_button_next_text } from "../../../love/public/src/app_shared_button_next_text.mjs";
export function app_code_next(
  context,
  parent_question,
  do_you_want_to_text,
  yes_text,
  refresh,
  on_next,
  on_back,
  back_text,
) {
  let nt = app_shared_button_next_text();
  let padded = text_pad_space_quote_double(nt);
  let question = text_combine_multiple([
    "Do you want to ",
    do_you_want_to_text,
    "? If not, choose: ",
    padded,
  ]);
  html_div_text(parent_question, question);
  let left = emoji_repeat_1();
  let answer_yes = text_combine_multiple([left, " Yes, ", yes_text]);
  app_replace_button_wide(parent_question, answer_yes, refresh);
  let container = html_div(parent_question);
  let bn = app_replace_button_wide(container, nt, on_next);
  if (null_not_is(on_back)) {
    let bt = app_shared_button_back_text();
    if (null_not_is(back_text)) {
      bt = text_combine_middle_space(bt, back_text);
    }
    let bb = app_replace_button_wide(container, bt, on_back);
  }
  let r = {
    container,
  };
  return r;
}
