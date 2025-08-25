import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_attribute_set(component, key, value) {
  let element = html_component_element_get(component);
  element.setAttribute(key, value);
}
