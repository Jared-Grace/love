import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
import { app_code_lesson_expression_choose_order_brackets_expression } from "./app_code_lesson_expression_choose_order_brackets_expression.mjs";
import { app_code_lesson_expression_choose_order_brackets_tree_of_code } from "./app_code_lesson_expression_choose_order_brackets_tree_of_code.mjs";
export function app_code_lesson_expression_choose_order_brackets_questions() {
  arguments_assert(arguments, 0);
  ("the question bank of the brackets lesson: lines whose || stands in brackets on the right of an && , given out one a screen and worked out again from the writing they were printed as");
  ("The asking is the same asking as every other press-at-a-time lesson - one line a screen, true and false taking turns - so it is asked for rather than written out here. What differs is the maker and the reader, and they differ together, because this lesson writes brackets where the one before it wrote none.");
  let bank = app_code_lesson_expression_choose_order_questions_generic(
    app_code_lesson_expression_choose_order_brackets_expression,
    app_code_lesson_expression_choose_order_brackets_tree_of_code,
  );
  return bank;
}
