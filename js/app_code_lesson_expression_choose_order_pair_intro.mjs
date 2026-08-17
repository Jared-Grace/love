import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_pair_intro(parent) {
  arguments_assert(arguments, 1);
  ("the one sentence that says what is different about this lesson, in a card of its own");
  ("It names the one thing that changed. Every line the learner has pressed so far had exactly one part that could go first, so choosing was really only finding; here there are two, and the word choose means what it says for the first time.");
  html_div_cycle_code(parent, [
    "Now two parts can go first, so you may choose either one",
  ]);
}
