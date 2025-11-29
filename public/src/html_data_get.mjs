import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_data_get(component, property_name, value) {
  marker("1");
  let element = html_component_element_get(component);
  element.dataset;
  object_property_set(element.dataset, property_name, value);
}
