import { html_style_font_size_inherit } from "../../../love/public/src/html_style_font_size_inherit.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
export function html_button_element(parent) {
  const tag_name = "button";
  let b = html_element(parent, tag_name);
  html_style_font_size_inherit(b);
  return b;
}
