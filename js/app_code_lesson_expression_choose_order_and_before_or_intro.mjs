import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_and_before_or_intro(
  parent,
) {
  arguments_assert(arguments, 1);
  ("the sentences that say what is different about this lesson, in a card of their own");
  ("Three sentences and no more: one line can now hold both operators, the && is the one that goes first, and the order is worth minding because the two ways round do not always land in the same place. The last of the three is what makes the second worth reading - a rule that never changed an answer would be a rule to forget.");
  ("Said as CAN give a different answer rather than DOES, because it is only sometimes: the two ways round agree on most lines and part on a few. A learner told they always differ would go looking for a difference that is not there and decide they had solved it wrong.");
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  html_div_cycle_code(parent, [
    "Now one line can hold both ",
    and_symbol,
    " and ",
    or_symbol,
  ]);
  html_div_cycle_code(parent, [
    "The ",
    and_symbol,
    " is solved before the ",
    or_symbol,
  ]);
  html_div_cycle_code(parent, [
    "Solving them the other way round can give a different answer",
  ]);
}
