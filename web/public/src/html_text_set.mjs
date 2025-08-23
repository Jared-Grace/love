import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_text_set(component, text) {
  let element = html_component_element_get(component);
  element.innerHTML = text;
}
