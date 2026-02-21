import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_style_assign(b, s) {
  let b_element = html_component_element_get(b);
  object_assign(b_element.style, s);
}
