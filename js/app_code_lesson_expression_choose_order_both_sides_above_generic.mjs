import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_sides_read } from "./app_code_expression_sides_read.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_suppose_solve_line } from "./app_code_lesson_suppose_solve_line.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_expression_equals_text } from "./app_code_expression_equals_text.mjs";
export function app_code_lesson_expression_choose_order_both_sides_above_generic(
  root,
  tree,
  recall,
  say_why,
  intro,
) {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 5);
  ("what stands above the card: whatever the lesson wants recalled first, then the one whole line handed in worked all the way through, then whatever one sentence the lesson has left to say");
  ("The same three-part shape as the step-at-a-time lessons before it - recall, run, hinge - because a learner arriving here has read that shape on every screen of this kind behind them. A run laid out a new way would be read as a new thing to learn, when the only new thing on these screens is what one line is allowed to hold.");
  ("The line is handed in, because the lessons built on this run differ in what stands in the middle of it and in little else. Everything that follows - what each side comes to, what is left when both are done, and what that comes to - is read off the line rather than written out.");
  ("Three of the parts are handed in as painters rather than as words: what to put in front of the learner before the run starts, why the two sides go first, and the one sentence at the end saying what is new. A painter can draw nothing at all, which is what lets one lesson open cold and another close without a closing sentence - where words handed in can only ever be different words, never no words.");
  ("Why the two sides go first is the one part that cannot be read off the line, and it is also the part that differs most: a line of two arithmetic sides sharing an operator is told by counting the operator, and a line of two comparison sides is told by naming their kind. A run that took those as sentences would be a run whose caller had to hand in three of them and keep them in step.");
  ("The run says why the two sides go first, then asks which of the two goes first, and only then says why that question has no answer: a part comes to the same value whenever it is solved, so neither one waiting on the other changes anything. A learner who has only ever had one right press at a time will read two pressable parts as a trap unless they are told why it is not one.");
  ("Every piece of the telling comes from that one line - both sides, what each comes to, what is left when both are done, and what that comes to. Numbers borrowed from nowhere in particular would be things to take on trust; one line worked from top to bottom is a run a learner can follow.");
  ("the recall makes its own card, so it is handed the root rather than a card to stand inside - a card within a card draws a second border around one line and reads as a note pinned to a screen rather than as one of its cards");
  recall(root);
  let whole_line = app_code_expression_code(tree);
  let sides = app_code_expression_sides_read(tree);
  let left_code = property_get(sides, "left_code");
  let right_code = property_get(sides, "right_code");
  let outer_symbol = property_get(sides, "outer_symbol");
  let left = property_get(tree, "left");
  let right = property_get(tree, "right");
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
  ("the answer is given as a REASON before it is given as a permission: solving a part always comes to the same value, so nothing the first part does can change what the second one comes to");
  ("Told only that either order works, a learner takes it on trust and cannot tell whether it goes on being true of the next line they meet. Told why, they can work it out for themselves every time after this.");
  say_why(run, sides);
  ("the permission is then said in the learner's own terms - what they would DO first, and that the problem they are solving comes out the same either way - because what they are deciding is which of the two to press and not what is true of the two parts");
  html_div_cycle_code(run, [
    "So we could solve ",
    left_code,
    " first or ",
    right_code,
    " first, and we'll get the same answer for the problem we're solving either way",
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
  ("the closing sentence makes its own card, so it is handed the root - a lesson with nothing new left to say hands in a painter that draws nothing, and an empty card would still be drawn if the card were made here");
  intro(root);
}
