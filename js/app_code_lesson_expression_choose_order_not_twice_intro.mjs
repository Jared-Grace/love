import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_not_twice_intro(
  parent,
) {
  "the sentences that say what is different about this lesson, in a card of their own";
  "Three sentences and no more: a ! can stand in front of another ! , only the nearer one has a value after it, and so the nearer one is the part that goes first. The last of the three is the one the lesson is for, and it follows from the two above it rather than being announced on its own.";
  "Said as what the ! needs rather than as a rule about which symbol is stronger. Both symbols here are the same symbol, so a rule about strength could not tell them apart at all - while the rule the learner has been reading off every line in this run, that a part is ready when nothing is left inside it, separates them at once.";
  "Nothing is said about brackets, because there are none and none are needed. A learner who has just come from lines that had to be bracketed would take a sentence saying so as a fourth thing to hold, and there is nothing there to hold.";
  arguments_assert(arguments, 1);
  let symbol = js_operator_bang_symbol();
  html_div_cycle_code(parent, [
    "Now a ",
    symbol,
    " can stand in front of another ",
    symbol,
  ]);
  html_div_cycle_code(parent, [
    "Only the nearer ",
    symbol,
    " has a value standing after it",
  ]);
  html_div_cycle_code(parent, [
    "So the nearer ",
    symbol,
    " is solved first, and the other one turns over what it comes to",
  ]);
}
