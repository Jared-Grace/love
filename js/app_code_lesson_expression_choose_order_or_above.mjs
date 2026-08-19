import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_or_expression } from "./app_code_lesson_expression_choose_order_or_expression.mjs";
import { app_code_lesson_expression_choose_order_both_sides_above_generic } from "./app_code_lesson_expression_choose_order_both_sides_above_generic.mjs";
import { app_code_lesson_expression_choose_order_or_intro } from "./app_code_lesson_expression_choose_order_or_intro.mjs";
export function app_code_lesson_expression_choose_order_or_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card on the press-at-a-time || lesson: one such line worked all the way through, and then the sentence saying what is new");
  ("The run is done on a TRUE line, because a true line is the one a learner can check against the two values they have just watched being worked out. It is also where || has something of its own to show: a true line here may hold a false side, which is the whole of how it differs from the && the learner has just done.");
  ("The same run as the lesson before it, word for word but for the operator it names. That is the point being made: nothing about taking a line apart changes when the operator in the middle does, and a screen laid out a new way would hide the sameness that is the lesson.");
  let want_true = true;
  let tree = app_code_lesson_expression_choose_order_or_expression(want_true);
  app_code_lesson_expression_choose_order_both_sides_above_generic(
    root,
    tree,
    app_code_lesson_expression_choose_order_or_intro,
    " are comparisons, so they go before the ",
    "A comparison comes to the same value every time you solve it",
  );
}
