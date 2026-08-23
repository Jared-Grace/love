import { app_code_lesson_expression_choose_order_both_sides_above_generic } from "./app_code_lesson_expression_choose_order_both_sides_above_generic.mjs";
import { app_code_lesson_expression_choose_order_pair_expression } from "./app_code_lesson_expression_choose_order_pair_expression.mjs";
import { app_code_lesson_expression_choose_order_pair_intro } from "./app_code_lesson_expression_choose_order_pair_intro.mjs";
import { app_code_lesson_expression_comparing_a_comparison_recall } from "./app_code_lesson_expression_comparing_a_comparison_recall.mjs";
import { app_code_lesson_expression_sides_parentheses_say } from "./app_code_lesson_expression_sides_parentheses_say.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_choose_order_pair_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card: the word comparison put back in front of the learner, then one whole line of this lesson's own kind worked all the way through, then the one sentence saying what is different here");
  ("The run is the one every lesson of this kind shares, told with the two sides pointed at by their brackets. It used to be a second copy of that run written out here, which is how the two came to say the permission differently: the shared one says we could solve either first and get the same answer for the problem we are solving, and this one said the two sides solve to the same values - a sentence a learner can read as the two sides being equal to each other, which they often are, and which is not the reason.");
  ("The run is done on a TRUE line, for the same reason the lessons beside it are: a true line is the one a learner can check against the two values they have just watched being worked out.");
  let want_true = true;
  let tree = app_code_lesson_expression_choose_order_pair_expression(want_true);
  app_code_lesson_expression_choose_order_both_sides_above_generic(
    root,
    tree,
    app_code_lesson_expression_comparing_a_comparison_recall,
    app_code_lesson_expression_sides_parentheses_say,
    app_code_lesson_expression_choose_order_pair_intro,
  );
}
