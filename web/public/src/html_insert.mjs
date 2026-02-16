import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_insert() {
  let parent_c = html_component_element_get(component);
  let child_c = html_component_element_get(component2);
  const i = 2;
  if (i >= parent_c.children.length) {
    parent_c.appendChild(child_c);
  } else {
    parent_c.insertBefore(child_c, parent_c.children[i]);
  }
}
