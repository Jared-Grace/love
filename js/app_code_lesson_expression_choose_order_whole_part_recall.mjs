import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_division_formula_recall_words } from "./app_code_division_formula_recall_words.mjs";
import { app_code_expression_whole_part_tree } from "./app_code_expression_whole_part_tree.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_whole_part_recall(
  root,
) {
  arguments_assert(arguments, 1);
  ("the one thing put back in front of the learner before the run on this lesson: the formula for the whole part of a division");
  ("It is the sentence the lesson that asks this line all at once opens with, word for word, out of the one place both of them read. A learner recognises a sentence they have already read in the second it takes, and stops to compare a near-copy against it.");
  ("★ NO CARD NAMING THE STRONGER OPERATORS, WHICH IS THE ONE THING THIS RECALL DROPS. The pressing lessons whose lines turn on which of two operators is the stronger open with that card. The only pair on this line is the rounding and the times, and which of those goes first is the very thing this lesson is here to teach - so the card would answer the question the lesson is asking. The lesson on the longer line does say it, because that line carries a minus as well.");
  let recall_card = app_code_container_light_blue(root);
  let words = app_code_division_formula_recall_words(
    "whole part",
    app_code_expression_whole_part_tree,
  );
  html_div_cycle_code(recall_card, words);
}
