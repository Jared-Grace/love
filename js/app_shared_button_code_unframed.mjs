import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_code_surfaces_inside } from "./app_shared_code_surfaces_inside.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { html_background_transparent } from "./html_background_transparent.mjs";
import { html_border_none } from "./html_border_none.mjs";
export function app_shared_button_code_unframed(component) {
  "take the button look off a button whose answer is written as code, so what the learner sees is the run of code itself and not a run of code sitting in a frame";
  "A code surface is already a block with its own colour and its own rounded corners. A button drawn around one puts a second block around the first, and the eye reads the outer one as a border on the inner - which is a line the design never meant to draw. Dropping the button's own colouring leaves one block where there were two, and the code goes on being the thing that is pressed.";
  "Only a button actually holding code is touched. One holding ordinary words has nothing else to look like, and stripping it would leave the learner nothing to press.";
  arguments_assert(arguments, 1);
  let insides = app_shared_code_surfaces_inside(component);
  let coded = list_empty_not_is(insides);
  if (coded) {
    html_background_transparent(component);
    html_border_none(component);
  }
}
