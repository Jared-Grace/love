import { app_code_lesson_expression_comparison } from "./app_code_lesson_expression_comparison.mjs";
import { app_code_comparison_pair_ordering } from "./app_code_comparison_pair_ordering.mjs";
import { js_operator_greater_than } from "./js_operator_greater_than.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_greater_than() {
  let operator = js_operator_greater_than();
  let symbol = property_get(operator, "operator");
  let compare = property_get(operator, "fn");
  let pair = app_code_comparison_pair_ordering(compare);
  let less_symbol = property_get(js_operator_less_than(), "operator");
  function closing(fn_name) {
    let parts = ["", symbol, " is like ", less_symbol];
    return parts;
  }
  let lesson = app_code_lesson_expression_comparison({
    operator,
    question_middle: "bigger than",
    pair,
    name_id_rights: [" greater than"],
    closing,
    preamble: null,
    explanation: null,
  });
  return lesson;
}
