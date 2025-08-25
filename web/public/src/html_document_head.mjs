import { html_component_wrap } from "./html_component_wrap.mjs";
import { marker } from "./marker.mjs";
export function html_document_head() {
  marker("1");
  let body = document.head;
  let component = html_component_wrap(body);
  return component;
}
