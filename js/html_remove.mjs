import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_remove(component) {
  let element = html_component_element_get(component);
  element.remove();
}
