import { property_get } from "./property_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_value_get(input) {
  let element = html_component_element_get(input);
  let value = property_get(element, "value");
  return value;
}
