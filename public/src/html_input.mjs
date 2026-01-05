import { html_style_font_size_inherit } from "../../../love/public/src/html_style_font_size_inherit.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
export function html_input(parent) {
  let component = html_element(parent, "input");
  html_style_font_size_inherit(component);
  return component;
}
