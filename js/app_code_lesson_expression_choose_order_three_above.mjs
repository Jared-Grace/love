import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_three_operator_count } from "./app_code_lesson_expression_choose_order_three_operator_count.mjs";
import { app_code_expression_flat_random_strong_first } from "./app_code_expression_flat_random_strong_first.mjs";
import { app_code_lesson_expression_choose_order_steps_above_generic } from "./app_code_lesson_expression_choose_order_steps_above_generic.mjs";
import { app_code_lesson_expression_choose_order_three_recall } from "./app_code_lesson_expression_choose_order_three_recall.mjs";
import { app_code_lesson_expression_choose_order_three_intro } from "./app_code_lesson_expression_choose_order_three_intro.mjs";
export function app_code_lesson_expression_choose_order_three_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card: which operators are the stronger ones put back in front of the learner, then one whole line of this lesson's own kind taken all the way down, then the one sentence saying what is different here");
  ("Only the line and the two sentences around it belong to this lesson - the walking of it belongs to every lesson that takes a line down one operator at a time, so it is asked for rather than written out here.");
  let count = app_code_lesson_expression_choose_order_three_operator_count();
  let tree = app_code_expression_flat_random_strong_first(count);
  app_code_lesson_expression_choose_order_steps_above_generic(
    root,
    app_code_lesson_expression_choose_order_three_recall,
    tree,
    " has a number on each side, and ",
    app_code_lesson_expression_choose_order_three_intro,
  );
}
