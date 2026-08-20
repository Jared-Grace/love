import { app_code_lesson_expression_choose_order_not_pair_expression } from "./app_code_lesson_expression_choose_order_not_pair_expression.mjs";
import { app_code_lesson_expression_choose_order_not_pair_tree_of_code } from "./app_code_lesson_expression_choose_order_not_pair_tree_of_code.mjs";
import { app_code_lesson_expression_choose_order_questions_generic } from "./app_code_lesson_expression_choose_order_questions_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_choose_order_not_pair_questions() {
  arguments_assert(arguments, 0);
  ("the question bank of the lesson putting a ! in front of a joined pair: lines like !(true && false), given out one a screen and worked out again from the writing they were printed as");
  ("The asking is the same asking as every other press-at-a-time lesson - one line a screen, true and false taking turns, the shape read back off the writing - so it is asked for rather than written out here. All that differs is the pair handed in, which is the whole of what this lesson is.");
  let bank = app_code_lesson_expression_choose_order_questions_generic(
    app_code_lesson_expression_choose_order_not_pair_expression,
    app_code_lesson_expression_choose_order_not_pair_tree_of_code,
  );
  return bank;
}
