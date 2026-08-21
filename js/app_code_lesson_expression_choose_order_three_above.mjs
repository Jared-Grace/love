import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_three_operator_count } from "./app_code_lesson_expression_choose_order_three_operator_count.mjs";
import { app_code_expression_flat_random_strong_first } from "./app_code_expression_flat_random_strong_first.mjs";
import { app_code_lesson_expression_choose_order_change_card } from "./app_code_lesson_expression_choose_order_change_card.mjs";
import { app_code_lesson_expression_choose_order_three_run } from "./app_code_lesson_expression_choose_order_three_run.mjs";
import { app_code_lesson_expression_choose_order_three_recall } from "./app_code_lesson_expression_choose_order_three_recall.mjs";
import { app_code_lesson_expression_choose_order_three_intro } from "./app_code_lesson_expression_choose_order_three_intro.mjs";
export function app_code_lesson_expression_choose_order_three_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card: which operators are the stronger ones put back in front of the learner, then one whole line of this lesson's own kind taken all the way down, then the one sentence saying what is different here");
  ("The card before it and the card after it belong to every lesson that takes a line down one operator at a time, so they are asked for rather than written out here. The walk between them is this lesson's own, because this is the first line long enough for the reason a step may go to need saying out loud.");
  let count = app_code_lesson_expression_choose_order_three_operator_count();
  let tree = app_code_expression_flat_random_strong_first(count);
  app_code_lesson_expression_choose_order_three_recall(root);
  app_code_lesson_expression_choose_order_three_run(root, tree);
  app_code_lesson_expression_choose_order_change_card(
    root,
    app_code_lesson_expression_choose_order_three_intro,
  );
}
