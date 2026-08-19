import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_code_output_explain_box(root) {
  arguments_assert(arguments, 1);
  ("the box that says what a card of code and its output is doing above the questions, read once, on the first screen where such a card is not the lesson's own example");
  ("A learner reaching that screen has finished a hundred lessons that each ended with one of these cards, so by now the shape itself says example. The first screen to put one higher up is therefore the one screen where the shape says the wrong thing, and it says it in the same breath as the real example a box below.");
  ("It is said after the card rather than before it, so there is nothing to hold. A learner has just seen the thing being named, and the words land on something already in front of them rather than on something promised.");
  ("Said once and never again. From the next screen on a learner has been told, and every screen after that would be spending a box on a thing they know - which is the cost the app pays everywhere else by writing Remember once and trusting it.");
  ("Not the example is said outright rather than left to be worked out from the example coming later. The whole of the confusion is a reader guessing, so a line that only implies the answer leaves the guess where it was.");
  let box = app_code_container_light_blue(root);
  html_div_cycle_code(box, [
    "The box above shows code and what it writes out",
  ]);
  html_div_cycle_code(box, ["It is part of the explanation, not the example"]);
  html_div_cycle_code(box, [
    "The example for this lesson comes at the end",
  ]);
  return box;
}
