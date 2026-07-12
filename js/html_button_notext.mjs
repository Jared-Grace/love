import { html_on_click } from "./html_on_click.mjs";
import { html_button_element } from "./html_button_element.mjs";
export function html_button_notext(parent, lambda) {
  let component = html_button_element(parent);
  html_on_click(component, lambda);
  return component;
}
