import { app_a_button } from "./app_a_button.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_a_button_shortcut(parent, shortcut, text, fn) {
  let b = app_a_button(
    parent,
    text_combine_multiple(["(", shortcut, ") ", text]),
    fn,
  );
  return b;
}
