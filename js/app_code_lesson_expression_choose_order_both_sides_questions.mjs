import { app_code_lesson_expression_choose_order_both_sides_tree_of_code } from "./app_code_lesson_expression_choose_order_both_sides_tree_of_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
import { app_code_lesson_expression_choose_order_both_sides_expression } from "./app_code_lesson_expression_choose_order_both_sides_expression.mjs";
export function app_code_lesson_expression_choose_order_both_sides_questions() {
  arguments_assert(arguments, 0);
  ("the question bank for the lesson whose lines all have === in the middle");
  let bank = app_code_lesson_expression_choose_order_questions_generic(
    app_code_lesson_expression_choose_order_both_sides_expression,
    app_code_lesson_expression_choose_order_both_sides_tree_of_code,
  );
  return bank;
}
