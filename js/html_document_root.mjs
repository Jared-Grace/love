import { html_component_wrap } from "./html_component_wrap.mjs";
export function html_document_root() {
  let root_element = document.documentElement;
  let html = html_component_wrap(root_element);
  return html;
}
