import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_element(parent, tag_name) {
  let parent_element = html_component_element_get(parent);
  const e = document.createElement(tag_name);
  parent_element.appendChild(e);
  let component = {
    element: e,
  };
  return component;
}
