import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_text_get(component) {
  let element = html_component_element_get(component);
  let v = element.innerHTML;
  return v;
}
