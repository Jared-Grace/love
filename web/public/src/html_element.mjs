import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_element(parent, tag_name) {
  let element = html_component_element_get(parent);
  const e = document.createElement(tag_name);
  element.appendChild(e);
  let v = {
    element: e,
  };
  return v;
}
