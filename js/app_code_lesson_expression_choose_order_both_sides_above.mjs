import { app_code_lesson_expression_choose_order_both_sides_above_arithmetic } from "./app_code_lesson_expression_choose_order_both_sides_above_arithmetic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_both_sides_expression } from "./app_code_lesson_expression_choose_order_both_sides_expression.mjs";
import { app_code_lesson_expression_choose_order_both_sides_intro } from "./app_code_lesson_expression_choose_order_both_sides_intro.mjs";
export function app_code_lesson_expression_choose_order_both_sides_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card on the lesson whose lines all have === in the middle: one such line worked all the way through, and then the sentence saying what is new");
  ("The run is done on a TRUE line, because a true line is the one with something to say: two sides that look nothing alike landing on the same number. A false line would be worked through just as correctly and would show the learner nothing they could not have guessed from the writing.");
  let want_true = true;
  let tree =
    app_code_lesson_expression_choose_order_both_sides_expression(want_true);
  app_code_lesson_expression_choose_order_both_sides_above_arithmetic(
    root,
    tree,
    app_code_lesson_expression_choose_order_both_sides_intro,
  );
}
