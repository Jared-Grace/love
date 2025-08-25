import { marker } from "./marker.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_style_remove(b, style_key) {
  marker("1");
  let b_element = html_component_element_get(b);
  b_element.style.removeProperty(style_key);
}
