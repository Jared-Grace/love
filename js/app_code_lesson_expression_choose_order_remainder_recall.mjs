import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_strong_card } from "./app_code_lesson_expression_choose_order_strong_card.mjs";
import { app_code_division_formula_recall_words } from "./app_code_division_formula_recall_words.mjs";
import { app_code_expression_remainder_tree } from "./app_code_expression_remainder_tree.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_remainder_recall(root) {
  arguments_assert(arguments, 1);
  ("the two things put back in front of the learner before the run on this lesson: which of the four arithmetic operators are worked out first, and the formula for the remainder of a division");
  ("Both are needed on this line and neither is new. The line carries a minus outside and a times inside it, so which of the two goes first is a question the learner can already answer - and the card answering it is the one every pressing lesson that needs it puts up, in the same words.");
  ("The formula sentence is the sentence the lesson that asks this line all at once opens with, word for word, out of the one place both of them read. A learner recognises a sentence they have already read in the second it takes, and stops to compare a near-copy against it.");
  ("The two stand in one card rather than two, because they are both what the run is about to be read with rather than two separate things to learn.");
  let recall_card = app_code_lesson_expression_choose_order_strong_card(root);
  let words = app_code_division_formula_recall_words(
    "remainder",
    app_code_expression_remainder_tree,
  );
  html_div_cycle_code(recall_card, words);
}
