import { html_style_font_size_inherit } from "../../../love/public/src/html_style_font_size_inherit.mjs";
import { html_on_pointerdown } from "../../../love/public/src/html_on_pointerdown.mjs";
import { html_button_element } from "../../../love/public/src/html_button_element.mjs";
export function html_button_notext(parent, lambda) {
  let component = html_button_element(parent);
  html_on_pointerdown(component, lambda);
  html_style_font_size_inherit(component);
  return component;
}
