import { html_document_body } from "./html_document_body.mjs";
import { marker } from "./marker.mjs";
export function app_replace() {
  let body = html_document_body();
  marker("1");
  const newDiv = document.createElement("div");
  newDiv.textContent = "Hello, world!";
  const parent = document.getElementById("container");
  parent.appendChild(newDiv);
}
