import { html_component_wrap } from "./html_component_wrap.mjs";
import { marker } from "./marker.mjs";
export function html_document_body() {
  marker("1");
  let body = document.body;
  let component = html_component_wrap(body);
  return component;
}
