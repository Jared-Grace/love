import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_data_get(component, property_name) {
  marker("1");
  let element = html_component_element_get(component);
  let value = object_property_get(element.dataset, property_name);
  return value;
}
