import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_checkpoint_button } from "./app_learn_js_checkpoint_button.mjs";
export function app_learn_js_review_button(parent, label, on_click, complete) {
  "$plain complete";
  "a review's checkpoint button: the checkpoint button with Review written before its label";
  arguments_assert(arguments, 4);
  let b = app_learn_js_checkpoint_button(
    parent,
    "Review ",
    label,
    on_click,
    complete,
  );
  return b;
}
