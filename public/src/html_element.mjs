import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_element(parent, tag_name) {
  const e = document.createElement(tag_name);
  let parent_element = html_component_element_get(parent);
  parent_element.appendChild(e);
  let component = html_component_wrap(e);
  html_style_set(component, "box-sizing", "border-box");
  return component;
}
