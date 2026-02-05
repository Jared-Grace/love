import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_style_remove(b, style_key) {
  let b_element = html_component_element_get(b);
  b_element.style.removeProperty(style_key);
}
