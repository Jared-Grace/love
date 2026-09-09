import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_same_strength_operator_count } from "./app_code_lesson_expression_choose_order_same_strength_operator_count.mjs";
import { app_code_expression_flat_random_same_strength } from "./app_code_expression_flat_random_same_strength.mjs";
import { app_code_lesson_expression_choose_order_reason_run } from "./app_code_lesson_expression_choose_order_reason_run.mjs";
export function app_code_lesson_expression_choose_order_same_strength_above(
  root,
) {
  arguments_assert(arguments, 1);
  ("what stands above the card: one whole line of this lesson's own kind taken all the way down, and nothing else");
  ("★ NO CARD NAMING THE STRONGER OPERATORS, WHICH IS THE ONE THING THIS TELLING DROPS. The lesson after it opens with that card because its lines turn on which operator is the stronger. No line here has two strengths on it, so the card would put a rule in front of a learner that nothing they are about to press uses - and a rule offered where it is not needed is read as a rule that is needed.");
  ("Nothing is said in words after the run either. The reason rows inside the walk already read that the operators are solved left to right, in those words, so a closing sentence would say a second time what the learner has just watched happen.");
  ("No heading above the line. A heading is for a telling that walks two lines and has to say how the second differs from the first, and this one walks one.");
  let count =
    app_code_lesson_expression_choose_order_same_strength_operator_count();
  let tree = app_code_expression_flat_random_same_strength(count);
  let heading_none = [];
  app_code_lesson_expression_choose_order_reason_run(root, heading_none, tree);
}
