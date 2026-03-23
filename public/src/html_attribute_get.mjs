import { html_attribute_get_unwrapped } from "../../../love/public/src/html_attribute_get_unwrapped.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_attribute_get(component, key) {
  let element = html_component_element_get(component);
  let value = html_attribute_get_unwrapped(element, key);
  return value;
}
