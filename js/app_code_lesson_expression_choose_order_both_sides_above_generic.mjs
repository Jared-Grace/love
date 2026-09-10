import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_sides_read } from "./app_code_expression_sides_read.mjs";
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
  ("The run says why the two sides go first, then asks which of the two goes first, and then answers it: the left one. A learner who has only ever had one right press at a time meets one right press here too - what is new on this screen is that the line has two parts and both of them get solved, not that the order has loosened.");
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
  ("what is left when both sides are done is built from the two values rather than stepped to, because the two sides are shown coming to their values one row each just above and stepping to it again would be the same two steps a third time");
  let both = app_code_expression_node(left_value, outer_symbol, right_value);
  let both_code = app_code_expression_code(both);
  let final_value = app_code_expression_value(tree);
  let final_text = text_to(final_value);
  let line_card = app_code_container_light_blue(root);
  app_code_lesson_suppose_solve_line(line_card, "Suppose", whole_line);
  let run = app_code_container_light_blue(root);
  ("why the two sides go first is said before which of them goes first, because the two are different questions and the first one is the harder: an operator waits on the parts underneath it, and both of these parts are underneath the one in the middle");
  say_why(run, sides);
  ("the order is then said in the learner's own terms - what they DO first - because what they are deciding is which of the two to press, and there is one right press");
  ("★ THIS USED TO OFFER A CHOICE, AND THE CHOICE WAS NOT TRUE OF THE COMPUTER. It said we could solve either side first and that either way we would get the same answer. That holds for a line whose every part is a plain number, and it stops holding the moment a part counts, prints or fetches - because JavaScript settles the order completely: it works out the left side of an operator all the way down, then the right side, then the operator itself. A course that taught the choice would be teaching a rule it had to take back later, and the learner who took it seriously would be the one it caught out.");
  ("Two rows, and the second one gives the reason. The first says what to do and the second says why it is that way round, which is the order a learner reads them in and the order that lets them work the next line out for themselves rather than remember this one.");
  ("A row saying it does not matter which one we solve first stood under these and is gone with the choice it belonged to.");
  html_div_cycle_code(run, [
    "So we solve ",
    left_code,
    " first, then ",
    right_code,
  ]);
  html_div_cycle_code(run, [
    "JavaScript always works out the left side before the right",
  ]);
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
  ("The line this run was worked on is handed back, so the screen underneath can be sure not to ask about the very same line. A learner shown a line solved from top to bottom and then asked to solve that same line has been asked nothing, and the two are drawn independently here and below - so neither can notice the clash on its own.");
  return whole_line;
}
