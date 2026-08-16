import { app_shared_button_confirm_generic } from "./app_shared_button_confirm_generic.mjs";
import { app_shared_button_red } from "./app_shared_button_red.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_button_confirm_red(
  parent,
  text,
  question,
  text_confirm,
  on_confirm,
) {
  "the same asking as the ordinary confirm, with the yes painted red: for the press that takes work away rather than adding it";
  arguments_assert(arguments, 5);
  let div = app_shared_button_confirm_generic(
    parent,
    text,
    question,
    text_confirm,
    on_confirm,
    app_shared_button_red,
  );
  return div;
}
