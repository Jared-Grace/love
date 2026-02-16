import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_insert() {
  let element = html_component_element_get(component);
  let element2 = html_component_element_get(component2);
  const i = 2;
  if (i >= parent.children.length) {
    parent.appendChild(newChild);
  } else {
    parent.insertBefore(newChild, parent.children[i]);
  }
}
