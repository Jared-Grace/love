import { html_style_font_size } from "../../../love/public/src/html_style_font_size.mjs";
import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_button_element } from "../../../love/public/src/html_button_element.mjs";
export function html_button(parent, text, lambda) {
  let component = html_button_element(parent);
  html_text_set(component, text);
  html_on_click(component, lambda);
  html_style_font_size(component, "inherit");
  return component;
}
