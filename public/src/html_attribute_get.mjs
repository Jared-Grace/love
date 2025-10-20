import { marker } from "../../../love/public/src/marker.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_attribute_get(component, key) {
  marker("1");
  let element = html_component_element_get(component);
  let value = element.getAttribute(key);
  return value;
}
