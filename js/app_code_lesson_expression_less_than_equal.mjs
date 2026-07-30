import { app_code_lesson_expression_comparison_equal_generic } from "./app_code_lesson_expression_comparison_equal_generic.mjs";
import { js_operator_less_than_equal } from "./js_operator_less_than_equal.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { js_operator_greater_than } from "./js_operator_greater_than.mjs";
export function app_code_lesson_expression_less_than_equal() {
  let operator = js_operator_less_than_equal();
  let strict_operator = js_operator_less_than();
  let opposite_operator = js_operator_greater_than();
  ("the pair-maker's true is the smaller side, which is the side this operator accepts");
  let lesson = app_code_lesson_expression_comparison_equal_generic({
    operator,
    strict_operator,
    opposite_operator,
    middle_words: "less than or equal to",
    true_ordering: true,
  });
  return lesson;
}
