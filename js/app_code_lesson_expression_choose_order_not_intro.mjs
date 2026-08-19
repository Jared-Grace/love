import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
export function app_code_lesson_expression_choose_order_not_intro(parent) {
  arguments_assert(arguments, 1);
  ("the sentences that say what is different about this lesson, in a card of their own");
  ("Three sentences and no more: a ! can stand in front of a whole comparison, the brackets are what say it holds all of it, and so the comparison is the part that goes first. The last of the three is the one the lesson is for, and it follows from the two above it rather than being announced on its own.");
  ("Said as what the ! needs rather than as a rule about strength. A learner who has been told the ! needs something already worked out beside it can see for themselves why it cannot go first, and they are reading the same rule they have read on every line before this one - a part is ready when nothing is left inside it.");
  let symbol = js_operator_bang_symbol();
  html_div_cycle_code(parent, [
    "Now a ",
    symbol,
    " can stand in front of a whole comparison",
  ]);
  html_div_cycle_code(parent, [
    "The brackets say the ",
    symbol,
    " holds all of it",
  ]);
  html_div_cycle_code(parent, [
    "So the comparison is solved first, and the ",
    symbol,
    " turns over what it comes to",
  ]);
}
