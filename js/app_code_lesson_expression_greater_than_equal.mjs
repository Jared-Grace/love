import { app_code_lesson_expression_comparison_equal_generic } from "./app_code_lesson_expression_comparison_equal_generic.mjs";
import { js_operator_greater_than_equal } from "./js_operator_greater_than_equal.mjs";
import { js_operator_greater_than } from "./js_operator_greater_than.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
export function app_code_lesson_expression_greater_than_equal() {
  let operator = js_operator_greater_than_equal();
  let strict_operator = js_operator_greater_than();
  let opposite_operator = js_operator_less_than();
  ("the pair-maker's true is the smaller side, so the larger side - the one this operator accepts - is its false");
  let lesson = app_code_lesson_expression_comparison_equal_generic({
    operator,
    strict_operator,
    opposite_operator,
    middle_words: "greater than or equal to",
    true_ordering: false,
  });
  return lesson;
}
