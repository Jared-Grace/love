import { html_button_notext } from "../../../love/public/src/html_button_notext.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
export function html_button(parent, text, lambda) {
  assert_arguments(arguments, 3);
  let component = html_button_notext(parent, lambda);
  html_text_set(component, text);
  return component;
}
