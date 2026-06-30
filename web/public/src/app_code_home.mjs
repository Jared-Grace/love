import { app_code_lesson_current } from "../../../love/public/src/app_code_lesson_current.mjs";
import { app_replace_button_screen } from "../../../love/public/src/app_replace_button_screen.mjs";
import { emoji_repeat_1 } from "../../../love/public/src/emoji_repeat_1.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { html_hr } from "../../../love/public/src/html_hr.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_remove_last_single } from "../../../love/public/src/list_remove_last_single.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  let lesson = app_code_lesson_current(context);
  let above = property_get(lesson, "above");
  let batch = property_get(lesson, "batch");
  above(root);
  let h = html_hr(root);
  html_div_text(root, "Here is an example:");
  let example_div = html_div(root);
  let b = [];
  function example() {
    let e = list_empty_is(b);
    if (e) {
      b = batch();
      list_shuffle(b);
    }
    let r = list_remove_last_single(b);
    let ex = property_get(r, "example");
    html_clear(example_div);
    ex(example_div);
  }
  html_div_text(root, "Do you want another example?");
  let left = emoji_repeat_1();
  let combined = text_combine(left, "Yes, show me another example");
  app_replace_button(root, combined, example);
  example();
  html_hr(root);
  html_div_text(root, "Do you want to be quizzed now?");
  let combined2 = text_combine("🎓", "Yes, please quiz me");
  app_replace_button_screen(context, app_code_home, root, combined2);
  return;
  html_p_text_multiple(root, [
    "In computer programming",
    "There are symbols",
    "All 10 of these numbers are different symbols: ",
  ]);
  html_p_text_multiple(root, [
    "In English:",
    "There are letters",
    "Letters are inside words",
    "Words are inside sentences",
    "Compture programs have a similar structure",
    "In a computer program, there are symbols",
    "Symbols are inside ",
  ]);
}
