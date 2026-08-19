import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_both_sides_questions_generic } from "./app_code_lesson_expression_choose_order_both_sides_questions_generic.mjs";
import { app_code_lesson_expression_choose_order_both_sides_any_comparison_expression } from "./app_code_lesson_expression_choose_order_both_sides_any_comparison_expression.mjs";
export function app_code_lesson_expression_choose_order_both_sides_any_comparison_questions() {
  arguments_assert(arguments, 0);
  ("the question bank for the lesson whose lines hold a comparison other than === in the middle");
  let bank =
    app_code_lesson_expression_choose_order_both_sides_questions_generic(
      app_code_lesson_expression_choose_order_both_sides_any_comparison_expression,
    );
  return bank;
}
