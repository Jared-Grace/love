import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function html_document_head() {
  marker("1");
  let head = document.head;
  let component = html_component_wrap(head);
  return component;
}
