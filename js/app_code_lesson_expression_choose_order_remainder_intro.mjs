import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_remainder_intro(
  parent,
) {
  arguments_assert(arguments, 1);
  ("the one sentence that says what is different about this lesson, in a card of its own");
  ("It names the one thing that changed. The formula pressed on the screen before this one is now standing inside a take-away, and the take-away is the last thing on the line to happen even though it is written first - which is the reading a learner has to make before any of it can be pressed.");
  let minus = js_operator_minus_symbol();
  html_div_cycle_code(parent, [
    "Now the ",
    minus,
    " is written first and happens last, because it waits until everything after it is one number",
  ]);
}
