import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_checkpoint_button } from "./app_code_checkpoint_button.mjs";
export function app_code_review_button(parent, label, on_click, complete) {
  "$plain complete";
  "a review's checkpoint button: the checkpoint button with Review written before its label";
  arguments_assert(arguments, 4);
  let b = app_code_checkpoint_button(
    parent,
    "Review ",
    label,
    on_click,
    complete,
  );
  return b;
}
