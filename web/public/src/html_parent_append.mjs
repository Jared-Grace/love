import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_parent_append(parent, e) {
  let parent_element = html_component_element_get(parent);
  parent_element.appendChild(e);
}
