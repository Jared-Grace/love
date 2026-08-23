import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_pair_intro(root) {
  arguments_assert(arguments, 1);
  ("the one sentence that says what is different about this lesson, in a card of its own");
  ("It makes the card rather than being handed one, so that a lesson with nothing left to say can hand in a painter that draws nothing at all and leave no empty card behind - the shape the shared run above these lessons expects of every closing sentence.");
  let parent = app_code_container_light_blue(root);
  ("It names the one thing that changed. Every line the learner has pressed so far had exactly one part that could go first, so choosing was really only finding; here there are two, and the word choose means what it says for the first time.");
  html_div_cycle_code(parent, [
    "Now two parts can go first, so you may choose either one",
  ]);
}
