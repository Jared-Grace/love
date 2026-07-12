import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_bounding_client_rect(component) {
  let e = html_component_element_get(component);
  let r = e.getBoundingClientRect();
  return r;
}
