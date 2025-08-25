import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_button_element } from "./html_button_element.mjs";
export function html_button(parent, text, lambda) {
  let component = html_button_element(parent);
  html_text_set(component, text);
  html_on_click(component, lambda);
  html_style_font_size(html, "inherit");
  return component;
}
