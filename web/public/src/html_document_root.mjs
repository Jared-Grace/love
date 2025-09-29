import { html_element } from "../../../love/public/src/html_element.mjs";
import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function html_document_root() {
  marker("1");
  let html_element = document.documentElement;
  let html = html_component_wrap(html_element);
  return html;
}
