import { marker } from "../../../love/public/src/marker.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_attribute_get(component, key, value) {
  marker("1");
  let element = html_component_element_get(component);
  element.setAttribute(key, value);
}
