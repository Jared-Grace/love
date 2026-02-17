import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_parent_remove(component) {
  let from_e = html_component_element_get(component);
  const parent = from_e.parentNode;
  parent.removeChild(from_e);
}
