import { marker } from "./marker.mjs";
export function html_document_body() {
  marker("1");
  let body2 = html_document_body();
  let body = document.body;
  return body;
}
