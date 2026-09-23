import { app_shared_button } from "./app_shared_button.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_button_inline(div, text, lambda) {
  arguments_assert(arguments, 3);
  ("an inline button is an ordinary button that sits in a line of other things, so it wears the one face every button wears - its own padding, corners and fill written out here had left it the only button with no edge");
  let component = app_shared_button(div, text, lambda);
  return component;
}
