import { marker } from "./marker.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_remove(component) {
  marker("1");
  let element = html_component_element_get(component);
  element.remove();
}
