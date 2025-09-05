import { marker } from "./marker.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_remove(b) {
  marker("1");
  let b_element = html_component_element_get(b);
  b_element.remove();
}
