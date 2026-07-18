import { app_code_lesson_functions_console_log_comparison } from "./app_code_lesson_functions_console_log_comparison.mjs";
import { app_code_comparison_pair_ordering } from "./app_code_comparison_pair_ordering.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_less_than() {
  let operator = js_operator_less_than();
  let compare = property_get(operator, "fn");
  let pair = app_code_comparison_pair_ordering(compare);
  function closing(fn_name) {
    let parts = [
      "Before, the answer was always a number, but now ",
      fn_name,
      " will write out ",
      js_keyword_true(),
      " or ",
      js_keyword_false(),
    ];
    return parts;
  }
  let explanation = [
    ["We answer that question with yes or no"],
    ["Yes is written as ", js_keyword_true()],
    ["No is written as ", js_keyword_false()],
  ];
  let lesson = app_code_lesson_functions_console_log_comparison({
    operator,
    question_middle: "smaller than",
    pair,
    name_id_rights: [" less than"],
    closing,
    preamble: null,
    explanation,
  });
  return lesson;
}
