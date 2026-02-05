import { html_element } from "../../../love/public/src/html_element.mjs";
import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
export function html_document_root() {
  let html_element = document.documentElement;
  let html = html_component_wrap(html_element);
  return html;
}
