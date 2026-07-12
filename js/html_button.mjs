import { html_button_notext } from "./html_button_notext.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function html_button(parent, text, lambda) {
  arguments_assert(arguments, 3);
  let component = html_button_notext(parent, lambda);
  html_text_set(component, text);
  return component;
}
