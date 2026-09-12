import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_division_formula_recall_words } from "./app_code_division_formula_recall_words.mjs";
import { app_code_expression_integer_division_tree } from "./app_code_expression_integer_division_tree.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_integer_division_recall(
  root,
) {
  arguments_assert(arguments, 1);
  ("the one thing put back in front of the learner before the run on this lesson: what the whole count of a division is written as");
  ("It is the sentence the two lessons on the longer lines open with, in their words, out of the one place all of them read. A learner reading down this run meets one sentence of this shape over and over with the name of the thing changed, which is what says these lines are one family.");
  ("★ NO CARD NAMING THE STRONGER OPERATORS, WHICH IS THE ONE THING THIS RECALL DROPS. The pressing lessons whose lines turn on which of two operators is the stronger open with that card. There is one operator inside these brackets and nothing outside them, so there is no pair to rank and the card would be answering a question the line does not ask.");
  let recall_card = app_code_container_light_blue(root);
  let words = app_code_division_formula_recall_words(
    "whole count",
    app_code_expression_integer_division_tree,
  );
  html_div_cycle_code(recall_card, words);
}
