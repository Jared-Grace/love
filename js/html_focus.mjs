import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_focus(input) {
  let element = html_component_element_get(input);
  element.focus();
}
