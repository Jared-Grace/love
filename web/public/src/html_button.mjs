import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { html_style_font_size } from "../../../love/public/src/html_style_font_size.mjs";
import { html_on_pointerdown } from "../../../love/public/src/html_on_pointerdown.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_button_element } from "../../../love/public/src/html_button_element.mjs";
export function html_button(parent, text, lambda) {
  assert_arguments(arguments, 3);
  let component = html_button_element(parent);
  html_text_set(component, text);
  html_on_pointerdown(component, lambda);
  html_style_font_size(component, "inherit");
  return component;
}
