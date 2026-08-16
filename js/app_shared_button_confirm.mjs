import { app_shared_button_confirm_generic } from "./app_shared_button_confirm_generic.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_button_confirm(
  parent,
  text,
  question,
  text_confirm,
  on_confirm,
) {
  "One button for an action a learner cannot take back: pressing it asks the question instead of doing the thing, and only the green button under the question does it. Shared, so every app asks in the same shape and nobody has to invent the wording of a second chance.";
  "This is the ordinary kind, where saying yes carries the learner forward; the red twin is for a yes that takes something away.";
  arguments_assert(arguments, 5);
  let div = app_shared_button_confirm_generic(
    parent,
    text,
    question,
    text_confirm,
    on_confirm,
    app_shared_button_green,
  );
  return div;
}
