import { html_parent_append } from "../../../love/public/src/html_parent_append.mjs";
import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
export function html_element(parent, tag_name) {
  const e = document.createElement(tag_name);
  html_parent_append(parent, e);
  let component = html_component_wrap(e);
  html_style_set(component, "box-sizing", "border-box");
  return component;
}
