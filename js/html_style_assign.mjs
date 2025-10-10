import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_style_assign(b, s) {
  marker("1");
  let b_element = html_component_element_get(b);
  object_assign(b_element.style, s);
}
