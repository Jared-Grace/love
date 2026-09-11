import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_arithmetic_parentheses_intro(
  parent,
) {
  arguments_assert(arguments, 1);
  ("the one sentence that says what is different about this lesson, in a card of its own");
  ("It names the one thing that changed. Every line the learner has pressed so far was decided by the operators themselves; here the marks decide, and they decide against the operators - the part inside them goes first even when the operator outside is the one that would otherwise have gone first.");
  let left_parenthesis = js_code_parenthesis_left();
  let right_parenthesis = js_code_parenthesis_right();
  let times = js_operator_asterisk_symbol();
  html_div_cycle_code(parent, [
    "Now ",
    left_parenthesis,
    " and ",
    right_parenthesis,
    " say which part goes first, even when the ",
    times,
    " would have gone first",
  ]);
}
