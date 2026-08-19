import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_expression } from "./app_code_lesson_expression_choose_order_and_before_or_expression.mjs";
import { app_code_lesson_expression_choose_order_and_before_or_tree_of_code } from "./app_code_lesson_expression_choose_order_and_before_or_tree_of_code.mjs";
export function app_code_lesson_expression_choose_order_and_before_or_questions() {
  arguments_assert(arguments, 0);
  ("the question bank of the and-before-or lesson: lines holding both && and ||, given out one a screen and worked out again from the writing they were printed as");
  ("The asking is the same asking as every other press-at-a-time lesson - one line a screen, true and false taking turns - so it is asked for rather than written out here. What differs is the maker and the reader, and they differ together, because this lesson writes a line of five words where the ones before it wrote seven.");
  let bank = app_code_lesson_expression_choose_order_questions_generic(
    app_code_lesson_expression_choose_order_and_before_or_expression,
    app_code_lesson_expression_choose_order_and_before_or_tree_of_code,
  );
  return bank;
}
