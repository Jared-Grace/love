import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
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
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 1);
  ("what stands above the card: the word comparison put back in front of the learner, then one whole line of this lesson's own kind worked all the way through, then the one sentence saying what is different here");
  ("The same three-part shape as the two lessons before it - recall, run, hinge - because a learner arriving here has read that shape on both of the screens behind them. A run laid out a new way would be read as a new thing to learn, when the only new thing on this screen is that TWO parts can go first.");
  ("The run puts both sides inside their brackets first, then asks which of the two goes first, and only then says why the question has no answer: a part comes to the same value whenever it is solved, so neither one waiting on the other changes anything. That is the whole lesson - a learner who has only ever had one right press at a time will read two pressable parts as a trap unless they are told why it is not one.");
  ("Every piece of the telling comes from that one line - both sides, what each comes to, what is left when both are done, and what that comes to. Numbers borrowed from nowhere in particular would be things to take on trust; one line worked from top to bottom is a run a learner can follow.");
  ("the recall makes its own card, so it is handed the root rather than a card to stand inside - a card within a card draws a second border around one line and reads as a note pinned to a screen rather than as one of its cards");
  app_code_lesson_expression_comparing_a_comparison_recall(root);
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
  ("the brackets are what says these two go first, not a number standing either side of them - every earlier line was ordered by which operator was stronger, and here all three are the same strength, so the brackets are the only thing left that says anything about order at all");
  html_div_cycle_code(run, [
    "",
    left_code,
    " and ",
    right_code,
    " are in parentheses, so they are solved before what is outside the parentheses",
  ]);
  ("the question is asked out loud before it is answered, because a learner who has only ever had one right press at a time is already looking for which of the two it is - asked, they are looking for the answer to the line below rather than for a trap");
  html_div_cycle_code(run, ["Which one do we solve first?"]);
  ("and the answer is given as a REASON before it is given as a permission: solving a part always comes to the same value, so nothing the first part does can change what the second one comes to");
  ("Told only that either order works, a learner takes it on trust and cannot tell whether it goes on being true of the next line they meet. Told why, they can work it out for themselves every time after this.");
  html_div_cycle_code(run, [
    "Numbers and comparisons solve to the same value every time",
  ]);
  html_div_cycle_code(run, [
    "So ",
    left_code,
    " and ",
    right_code,
    " solve to the same values whichever one we solve first",
  ]);
  html_div_cycle_code(run, ["It does not matter which one we solve first"]);
  ("both are then simply shown coming to their values, one line each, with nothing said about order - the order question is already answered above and saying it again here would make it sound unsettled");
  let left_solved = app_code_expression_equals_text(left_code, left_text);
  html_div_cycle_code(run, ["", left_solved]);
  let right_solved = app_code_expression_equals_text(right_code, right_text);
  html_div_cycle_code(run, ["", right_solved]);
  html_div_cycle_code(run, [
    "Then we replace them to get ",
    both_code,
    ", which is ",
    final_text,
  ]);
  let change_card = app_code_container_light_blue(root);
  app_code_lesson_expression_choose_order_pair_intro(change_card);
}
