import { object_assign } from "./object_assign.mjs";
import { marker } from "./marker.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_style_merge(b, s) {
  marker("1");
  let b_element = html_component_element_get(b);
  object_assign(b_element.style, s);
}
