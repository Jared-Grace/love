import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_value_get(input) {
  let element = html_component_element_get(input);
  let value = object_property_get(element, "value");
  return value;
}
