import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_insert(parent, child, index) {
  let parent_c = html_component_element_get(parent);
  let child_c = html_component_element_get(child);
  if (index >= parent_c.children.length) {
    parent_c.appendChild(child_c);
  } else {
    parent_c.insertBefore(child_c, parent_c.children[index]);
  }
}
