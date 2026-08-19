import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_and_expression } from "./app_code_lesson_expression_choose_order_and_expression.mjs";
import { app_code_lesson_expression_choose_order_both_sides_above_generic } from "./app_code_lesson_expression_choose_order_both_sides_above_generic.mjs";
import { app_code_lesson_expression_choose_order_and_intro } from "./app_code_lesson_expression_choose_order_and_intro.mjs";
export function app_code_lesson_expression_choose_order_and_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card on the press-at-a-time && lesson: one such line worked all the way through, and then the sentence saying what is new");
  ("The run is done on a TRUE line, because a true line is the one a learner can check against the two values they have just watched being worked out. A false line is worked through just as correctly and reads as something having gone wrong on a screen whose job is to show the working going right.");
  ("The same run as the lessons before it, told with the two sides named as comparisons rather than as arithmetic. That is the point being made: a learner who has solved both sides of a comparison meets the same doing one level up, and a screen laid out a new way would hide the sameness that is the whole lesson.");
  let want_true = true;
  let tree = app_code_lesson_expression_choose_order_and_expression(want_true);
  app_code_lesson_expression_choose_order_both_sides_above_generic(
    root,
    tree,
    app_code_lesson_expression_choose_order_and_intro,
    " are comparisons, so they go before the ",
    "A comparison comes to the same value every time you solve it",
  );
}
