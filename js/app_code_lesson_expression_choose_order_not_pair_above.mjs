import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_not_pair_expression } from "./app_code_lesson_expression_choose_order_not_pair_expression.mjs";
import { app_code_lesson_expression_choose_order_steps_above_generic } from "./app_code_lesson_expression_choose_order_steps_above_generic.mjs";
import { app_code_lesson_expression_choose_order_not_pair_recall } from "./app_code_lesson_expression_choose_order_not_pair_recall.mjs";
import { app_code_lesson_expression_choose_order_not_pair_intro } from "./app_code_lesson_expression_choose_order_not_pair_intro.mjs";
export function app_code_lesson_expression_choose_order_not_pair_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card on the lesson putting a ! in front of a joined pair: the two rules being brought together, then one such line taken all the way down, then the sentences saying what is new");
  ("The line run through is drawn rather than settled, because nothing about this line decides anything - a ! turns over whatever is under it and both of the operators it may stand over are worked the same way. A screen that read the same on every visit would read as a picture rather than as a line being worked out.");
  ("It is asked for as a true one so that the joined pair inside comes out false, which is the pairing worth showing: a learner watching a false part turn into a true line has seen the ! do something rather than agree with what was already there.");
  ("The steps used to be worded the way the ! lesson before it worded them - a part goes when nothing is left inside it - because this line takes both kinds of step, the joined pair with a value on each side and then the ! with a value after it, and only that wording was true of both. The walk names the reason now instead of what the part had beside it, so the parentheses answer for the first step and the ! being all that is left answers for the second, and neither sentence has to be true of the other.");
  let want_true = true;
  let tree =
    app_code_lesson_expression_choose_order_not_pair_expression(want_true);
  app_code_lesson_expression_choose_order_steps_above_generic(
    root,
    app_code_lesson_expression_choose_order_not_pair_recall,
    tree,
    app_code_lesson_expression_choose_order_not_pair_intro,
  );
}
