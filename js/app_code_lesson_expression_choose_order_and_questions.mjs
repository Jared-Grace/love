import { app_code_lesson_expression_choose_order_both_sides_tree_of_code } from "./app_code_lesson_expression_choose_order_both_sides_tree_of_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
import { app_code_lesson_expression_choose_order_and_expression } from "./app_code_lesson_expression_choose_order_and_expression.mjs";
export function app_code_lesson_expression_choose_order_and_questions() {
  arguments_assert(arguments, 0);
  ("the question bank of the press-at-a-time && lesson: lines with a comparison either side of &&, given out one a screen and worked out again from the writing they were printed as");
  ("The asking is the same asking as the press-both-sides lessons - one line a screen, true and false taking turns, the shape read back off the writing - so it is asked for rather than written out here. All that differs is the maker handed in, which is the whole of what this lesson is.");
  ("Reading a line back works unchanged because an && line is written the same seven words as a line with a comparison in the middle: a number, an operator, a number, the middle operator, and the same three again. Nothing is bracketed either way, because && is weaker than every comparison and so each side gathers itself.");
  let bank = app_code_lesson_expression_choose_order_questions_generic(
    app_code_lesson_expression_choose_order_and_expression,
    app_code_lesson_expression_choose_order_both_sides_tree_of_code,
  );
  return bank;
}
