import {html_component_element_get} from "./html_component_element_get.mjs";
export function html_attribute_set(component, name, value) {
  let element = html_component_element_get(component);
  element.setAttribute(name, value);
}
