import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_three_intro(parent) {
  arguments_assert(arguments, 1);
  ("the one sentence that says what is different about this lesson, in a card of its own");
  ("It names the one thing that changed. The reading of the operators is the reading the learner already has; what is new is that the line does not run out after the second step, so the same reading is asked for once more on a line that has already changed twice.");
  ("It used to say that after each step there was still only one part with a number on each side. That is true of the shape underneath the line and it is not something the learner can see - on 5 - 2 + 4 both the minus and the plus look ready - so the card said the one thing on the screen a reader had to take on trust. What is said instead is the rule that decides it, which is the rule they will need on the line the quiz hands them.");
  html_div_cycle_code(parent, [
    "Now the line takes three steps, and once the stronger operator has gone the two left are equals, so the one on the left goes first",
  ]);
}
