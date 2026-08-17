import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_equals_text } from "./app_code_expression_equals_text.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { app_code_lesson_expression_choose_order_pair_expression } from "./app_code_lesson_expression_choose_order_pair_expression.mjs";
import { app_code_lesson_expression_choose_order_pair_intro } from "./app_code_lesson_expression_choose_order_pair_intro.mjs";
import { app_code_lesson_expression_comparing_a_comparison_recall } from "./app_code_lesson_expression_comparing_a_comparison_recall.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_choose_order_pair_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card: the word comparison put back in front of the learner, then one whole line of this lesson's own kind worked all the way through, then the one sentence saying what is different here");
  ("The same three-part shape as the two lessons before it - recall, run, hinge - because a learner arriving here has read that shape on both of the screens behind them. A run laid out a new way would be read as a new thing to learn, when the only new thing on this screen is that TWO parts can go first.");
  ("The run says of each side in turn that it may go first, and then says outright that either order comes to the same answer. That last line is the whole lesson: a learner who has only ever had one right press at a time will read two pressable parts as a trap unless they are told plainly that it is not one.");
  ("Every piece of the telling comes from that one line - both sides, what each comes to, what is left when both are done, and what that comes to. Numbers borrowed from nowhere in particular would be things to take on trust; one line worked from top to bottom is a run a learner can follow.");
  let recall_card = app_code_container_light_blue(root);
  app_code_lesson_expression_comparing_a_comparison_recall(recall_card);
  let want_true = true;
  let tree = app_code_lesson_expression_choose_order_pair_expression(want_true);
  let whole_line = app_code_expression_code(tree);
  let left = property_get(tree, "left");
  let right = property_get(tree, "right");
  let outer_symbol = property_get(tree, "operator");
  let left_code = app_code_expression_code(left);
  let right_code = app_code_expression_code(right);
  let left_value = app_code_expression_value(left);
  let right_value = app_code_expression_value(right);
  let left_text = text_to(left_value);
  let right_text = text_to(right_value);
  ("what is left when both sides are done is built from the two values rather than stepped to, because the two steps can be taken in either order and a run that stepped through one of them would be showing an order where the point is that there is not one");
  let both = app_code_expression_node(left_value, outer_symbol, right_value);
  let both_code = app_code_expression_code(both);
  let final_value = app_code_expression_value(tree);
  let final_text = text_to(final_value);
  let line_card = app_code_container_light_blue(root);
  app_code_lesson_suppose_solve_line(line_card, "Suppose", whole_line);
  let run = app_code_container_light_blue(root);
  let left_solved = app_code_expression_equals_text(left_code, left_text);
  html_div_cycle_code(run, [
    "",
    left_code,
    " has a number on each side, so it can go first, and ",
    left_solved,
  ]);
  let right_solved = app_code_expression_equals_text(right_code, right_text);
  html_div_cycle_code(run, [
    "",
    right_code,
    " has a number on each side too, so it can go first as well, and ",
    right_solved,
  ]);
  html_div_cycle_code(run, [
    "Either one can go first, and the line comes to the same answer either way",
  ]);
  html_div_cycle_code(run, [
    "When both are done the line is ",
    both_code,
    ", so the whole line is ",
    final_text,
  ]);
  let change_card = app_code_container_light_blue(root);
  app_code_lesson_expression_choose_order_pair_intro(change_card);
}
