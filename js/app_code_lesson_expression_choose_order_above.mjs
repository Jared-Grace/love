import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_expression } from "./app_code_lesson_expression_choose_order_expression.mjs";
import { app_code_lesson_expression_choose_order_run_worked } from "./app_code_lesson_expression_choose_order_run_worked.mjs";
export function app_code_lesson_expression_choose_order_above(root, context) {
  arguments_assert(arguments, 2);
  ("what stands above the card: one line of this lesson's own kind worked all the way through - why the part that goes first goes first, what cannot go yet, the solving, the swap, and what is left - the same run the comparison lesson's order screen works, at the human's request");
  ("A line of its own, built the way the lesson's own lines are built, rather than the line the learner is about to press - worked out on their own line, the buttons underneath would be asking for something they had just been told.");
  ("The strong operator is on the right, for the reason the first question of the bank puts it there: the operator to choose is not the leftmost one, so a learner reading the run learns to read the operator rather than the position.");
  let strong_right = true;
  let tree = app_code_lesson_expression_choose_order_expression(strong_right);
  app_code_lesson_expression_choose_order_run_worked(root, tree, "Suppose");
}
