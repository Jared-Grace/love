import { html_document_body } from "./html_document_body.mjs";
import { marker } from "./marker.mjs";
export function app_replace() {
  let body = html_document_body();
  marker("1");
  const tag_name = "div";
  const newDiv = document.createElement(tag_name);
  parent.appendChild(newDiv);
}
