import { equal_0 } from "../../../love/public/src/equal_0.mjs";
import { range_map } from "../../../love/public/src/range_map.mjs";
import { digits_positive } from "../../../love/public/src/digits_positive.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { integer_random_1 } from "../../../love/public/src/integer_random_1.mjs";
import { integer_random } from "../../../love/public/src/integer_random.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { list_random_item } from "../../../love/public/src/list_random_item.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  html_clear(root);
  let batch = [];
  let ds = digits();
  let dps = digits_positive();
  let digit_counts = integer_random_1(5);
  list_shuffle(digit_counts);
  function lambda(digit_count) {
    function lambda2(item) {
      let eq = equal_0(item);
      let result = ternary(condition, on_true, on_false);
      if (eq) {
      } else {
      }
    }
    let mapped = range_map(digit_count, lambda2);
    let r2 = {
      render,
      answer,
      mapped,
    };
    return r2;
  }
  let mapped = list_map(digit_counts, lambda);
  function example() {
    if (false) {
    }
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
