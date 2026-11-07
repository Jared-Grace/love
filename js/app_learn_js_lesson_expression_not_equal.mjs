import { app_learn_js_lesson_expression_comparison } from "./app_learn_js_lesson_expression_comparison.mjs";
import { app_learn_js_comparison_pair_inequality } from "./app_learn_js_comparison_pair_inequality.mjs";
import { js_operator_bang_double_equal } from "./js_operator_bang_double_equal.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { property_get } from "./property_get.mjs";
export function app_learn_js_lesson_expression_not_equal() {
  let operator = js_operator_bang_double_equal();
  let symbol = property_get(operator, "operator");
  let pair = app_learn_js_comparison_pair_inequality();
  let equal_symbol = js_operator_triple_equal_symbol();
  function closing() {
    let parts = [
      "",
      symbol,
      " is like ",
      equal_symbol,
      ", but asks if the two sides are different",
    ];
    return parts;
  }
  let lesson = app_learn_js_lesson_expression_comparison({
    operator,
    question_middle: "different from",
    pair,
    name_id_rights: ["not equal to"],
    closing,
    preamble: null,
    explanation: null,
  });
  return lesson;
}
