import { html_parent_append } from "./html_parent_append.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
export function html_element(parent, tag_name) {
  let e = document.createElement(tag_name);
  let component = html_component_wrap(e);
  html_parent_append(parent, component);
  html_style_set(component, "box-sizing", "border-box");
  return component;
}
