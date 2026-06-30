import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { app_code_container_dark } from "../../../love/public/src/app_code_container_dark.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { list_remove_last_single } from "../../../love/public/src/list_remove_last_single.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { integer_positive_random_digits_text } from "../../../love/public/src/integer_positive_random_digits_text.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  let p = html_div_text(root, "Example:");
  let example_div = html_div(root);
  let batch = [];
  function example() {
    let e = list_empty_is(batch);
    if (e) {
      batch = digit_batch();
      list_shuffle(batch);
    }
    let r = list_remove_last_single(batch);
    let render2 = property_get(r, "render");
    let question2 = property_get(render2, "question");
    let answer2 = property_get(render2, "answer");
    html_clear(example_div);
    let div = html_div(example_div);
    question2(div);
    let div2 = html_div(example_div);
    answer2(div2);
  }
  let b = app_replace_button(root, "Show me another example", example);
  example();
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
    let digit_counts = range_1(5);
    function lambda(digit_count) {
      let digits = integer_positive_random_digits_text(digit_count);
      let r2 = {
        render: {
          question: function lambda2(parent) {
            let span = html_div_text(parent, "Symbols: ");
            let div3 = app_code_container_dark(parent);
            function lambda4(d) {
              let span2 = app_code_symbol(div3, d);
              return span2;
            }
            let spans = list_map(digits, lambda4);
          },
          answer: function lambda3(parent_button) {
            html_text_set(parent_button, "Number of symbols: ");
            let div3 = app_code_container_dark(parent_button);
            html_text_set(div3, digit_count);
            let span22 = app_code_symbol(div3, digit_count);
          },
        },
        answer: digit_count,
        mapped: digits,
      };
      return r2;
    }
    let mapped2 = list_map(digit_counts, lambda);
    return mapped2;
  }
}
