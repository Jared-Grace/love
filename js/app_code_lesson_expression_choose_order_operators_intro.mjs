import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_operators_intro(parent) {
  arguments_assert(arguments, 1);
  ("the one sentence that says what is different about this lesson, in a card of its own");
  ("It names the one thing that changed. Every line the learner has pressed so far was built from times and plus, so a learner could have been pressing the times rather than the stronger operator; here there are four operators and the rule has to be read rather than remembered as a symbol.");
  html_div_cycle_code(parent, [
    "Now any of the four operators can be on the line, and the stronger one still goes first",
  ]);
}
