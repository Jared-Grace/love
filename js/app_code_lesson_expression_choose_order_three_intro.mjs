import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_three_intro(parent) {
  arguments_assert(arguments, 1);
  ("the one sentence that says what is different about this lesson, in a card of its own");
  (
    "It names the one thing that changed. The reading of the operators is the reading the learner already has; what is new is that the line does not run out after the second step, so the same reading is asked for once more on a line that has already changed twice."
  );
  html_div_cycle_code(parent, [
    "Now the line takes three steps, and after each one there is still only one part with a number on each side",
  ]);
}
