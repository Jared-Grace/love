import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_three_operator_count } from "./app_code_lesson_expression_choose_order_three_operator_count.mjs";
import { app_code_expression_flat_random_strong_first } from "./app_code_expression_flat_random_strong_first.mjs";
import { app_code_lesson_expression_choose_order_change_card } from "./app_code_lesson_expression_choose_order_change_card.mjs";
import { app_code_lesson_expression_choose_order_three_run } from "./app_code_lesson_expression_choose_order_three_run.mjs";
import { app_code_lesson_expression_choose_order_three_recall } from "./app_code_lesson_expression_choose_order_three_recall.mjs";
import { app_code_lesson_expression_choose_order_three_intro } from "./app_code_lesson_expression_choose_order_three_intro.mjs";
export function app_code_lesson_expression_choose_order_three_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card: which operators are the stronger ones put back in front of the learner, then one whole line of this lesson's own kind taken all the way down");
  ("The recall card belongs to every lesson that takes a line down one operator at a time, so it is asked for rather than written out here. The walk after it is this lesson's own, because this is the first line long enough to need three steps.");
  ("NOTHING IS SAID IN WORDS AFTER THE RUN. There used to be a closing card reading: now the line takes three steps, and once the stronger operator has gone the two left are equals, so the one on the left goes first. Every part of that is either visible or already held - the three steps are counted by watching the run, the stronger pair is named by the card above it, and left to right for two of equal strength is the sentence the plus-minus lesson ends on.");
  ("It also spent two words no screen ever defines - stronger and equals - at the one moment the learner is about to press rather than read. What the run shows by being pressed, a sentence can only ask to be believed.");
  let count = app_code_lesson_expression_choose_order_three_operator_count();
  let tree = app_code_expression_flat_random_strong_first(count);
  app_code_lesson_expression_choose_order_three_recall(root);
  app_code_lesson_expression_choose_order_three_run(root, tree);
}
