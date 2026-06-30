import { log } from "../../../love/public/src/log.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { integer_positive_random_digits_text } from "../../../love/public/src/integer_positive_random_digits_text.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { integer_random_1 } from "../../../love/public/src/integer_random_1.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  html_clear(root);
  let batch = [];
  function example() {
    let e = list_empty_is(batch);
    if (e) {
      batch = digit_batch();
    }
    let r = list_random_item(batch);
    log(app_code_home.name, {
      r,
    });
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
  function digit_batch() {
    let digit_counts = integer_random_1(5);
    function lambda(digit_count) {
      let digits = integer_positive_random_digits_text(digit_count);
      let r2 = {
        render,
        answer,
        mapped: digits,
      };
      return r2;
    }
    let mapped2 = list_map(digit_counts, lambda);
    return mapped2;
  }
}
