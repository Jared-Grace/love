import { app_a_button } from "../../../love/public/src/app_a_button.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_a_button_shortcut(parent, shortcut, text, fn) {
  let b2 = app_a_button(
    parent,
    text_combine_multiple(["(", shortcut, ") ", text]),
    fn,
  );
  return b2;
}
