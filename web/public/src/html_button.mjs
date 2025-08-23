import {html_on_click} from "./html_on_click.mjs";
import {html_text_set} from "./html_text_set.mjs";
import {html_button_element} from "./html_button_element.mjs";
export function html_button(body, text, lambda) {
  let component = html_button_element(body);
  html_text_set(component, text);
  html_on_click(component, lambda);
}
