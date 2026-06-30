import { integer_random_1 } from "../../../love/public/src/integer_random_1.mjs";
import { integer_random } from "../../../love/public/src/integer_random.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  html_clear(root);
  let batch = [];
  let digit_count = integer_random_1(5);
  let split = digits();
  function example() {
    let r6 = integer_random(n);
    let r = list_random_item(split);
  }
  let b = app_replace_button(root, "Show me another example", example);
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
