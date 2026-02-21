import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_parent_append(parent, child) {
  let parent_element = html_component_element_get(parent);
  let child_element = html_component_element_get(child);
  parent_element.appendChild(child_element);
}
