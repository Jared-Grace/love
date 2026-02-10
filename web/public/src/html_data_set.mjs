import { property_set } from "../../../love/public/src/property_set.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_data_set(component, property_name, value) {
  let element = html_component_element_get(component);
  property_set(element.dataset, property_name, value);
}
