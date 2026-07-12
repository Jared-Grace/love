import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_parent_remove(component) {
  let e = html_component_element_get(component);
  let parent = e.parentNode;
  parent.removeChild(e);
}
