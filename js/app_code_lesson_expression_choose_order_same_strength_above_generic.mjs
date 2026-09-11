import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_flat_random_same_strength } from "./app_code_expression_flat_random_same_strength.mjs";
import { app_code_lesson_expression_choose_order_reason_run } from "./app_code_lesson_expression_choose_order_reason_run.mjs";
export function app_code_lesson_expression_choose_order_same_strength_above_generic(
  root,
  operator_count,
) {
  arguments_assert(arguments, 2);
  ("what stands above the card on a same-strength pressing lesson: one whole line of that lesson's own kind taken all the way down, and nothing else");
  ("★ NO CARD NAMING THE STRONGER OPERATORS, WHICH IS THE ONE THING THIS TELLING DROPS. The pressing lessons whose lines turn on which operator is the stronger open with that card. No line here has two strengths on it, so the card would put a rule in front of a learner that nothing they are about to press uses - and a rule offered where it is not needed is read as a rule that is needed.");
  ("Nothing is said in words after the run either. The reason rows inside the walk already read that the operators are solved left to right, in those words, so a closing sentence would say a second time what the learner has just watched happen.");
  ("No heading above the line. A heading is for a telling that walks two lines and has to say how the second differs from the first, and this one walks one.");
  ("How many operators the walked line carries is handed in, and it is the lesson's own count rather than a number written here, so the line a learner reads is the length of the line they are about to be given.");
  let tree = app_code_expression_flat_random_same_strength(operator_count);
  let heading_none = [];
  app_code_lesson_expression_choose_order_reason_run(root, heading_none, tree);
}
