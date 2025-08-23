import { html_document_body } from "./html_document_body.mjs";
import { marker } from "./marker.mjs";
export function app_replace() {
  let body = html_document_body();
  marker("1");const newDiv = document.createElement("div");

// Set its text content (optional)
newDiv.textContent = "Hello, world!";

// Find the parent element
const parent = document.getElementById("container");

// Append new element to the parent
parent.appendChild(newDiv);
}
