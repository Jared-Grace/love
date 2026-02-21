import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_data_get(component, property_name) {
  let element = html_component_element_get(component);
  let value = property_get(element.dataset, property_name);
  return value;
}
