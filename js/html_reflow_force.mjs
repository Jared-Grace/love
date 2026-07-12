import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_reflow_force(component) {
  let element = html_component_element_get(component);
  let v = element.offsetHeight;
  return v;
}
