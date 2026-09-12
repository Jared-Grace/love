import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_integer_division_uneven_cards } from "./app_code_integer_division_uneven_cards.mjs";
export function app_code_lesson_expression_choose_order_integer_division_recall(
  root,
) {
  arguments_assert(arguments, 1);
  ("what stands in front of the learner before the run on this lesson: that rounding down is already known, and that dividing does not always come out even");
  ("★ IT USED TO SAY Remember, the whole count of 14 / 4 is Math.floor(14 / 4), AND NOTHING HAD TAUGHT THAT YET. This screen comes first of the two on this line, so there was nothing to remember: the sentence was telling a learner they already knew the very thing the screen was about to show them for the first time. The other pressing lessons in this run do open with a remembering, and honestly - a whole lesson taught their formula on the screen before.");
  ("So this screen opens the way the screen that asks the line all at once opens, out of the one place both of them read. What a learner needs before pressing this line is not a formula put back in front of them, it is the two facts the line is made of - that rounding down is a thing they can already do, and that a division is what leaves something to round.");
  ("★ NO CARD NAMING THE STRONGER OPERATORS, WHICH IS THE ONE THING THIS OPENING DROPS. The pressing lessons whose lines turn on which of two operators is the stronger open with that card. There is one operator inside these brackets and nothing outside them, so there is no pair to rank and the card would be answering a question the line does not ask.");
  app_code_integer_division_uneven_cards(root);
}
