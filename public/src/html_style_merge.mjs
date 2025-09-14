import { marker } from "./marker.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_style_merge(b, style_key, style_value) {
  marker("1");
  let b_element = html_component_element_get(b);
  b_element.style[style_key] = style_value;
}
