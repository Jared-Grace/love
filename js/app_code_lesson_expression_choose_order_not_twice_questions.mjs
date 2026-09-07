import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
import { app_code_lesson_expression_choose_order_not_twice_expression } from "./app_code_lesson_expression_choose_order_not_twice_expression.mjs";
import { app_code_lesson_expression_choose_order_not_twice_tree_of_code } from "./app_code_lesson_expression_choose_order_not_twice_tree_of_code.mjs";
export function app_code_lesson_expression_choose_order_not_twice_questions() {
  "the question bank of the press-at-a-time !! lesson: a true or a false with two ! symbols in front of it, given out one a screen and worked out again from the writing it was printed as";
  "The asking is the same asking as every other press-at-a-time lesson - one line a screen, true and false taking turns, the shape read back off the writing - so it is asked for rather than written out here. All that differs is the pair handed in, which is the whole of what this lesson is.";
  arguments_assert(arguments, 0);
  let bank = app_code_lesson_expression_choose_order_questions_generic(
    app_code_lesson_expression_choose_order_not_twice_expression,
    app_code_lesson_expression_choose_order_not_twice_tree_of_code,
  );
  return bank;
}
