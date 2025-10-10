import { marker } from "../../../love/public/src/marker.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_remove(component) {
  marker("1");
  let element = html_component_element_get(component);
  element.remove();
}
