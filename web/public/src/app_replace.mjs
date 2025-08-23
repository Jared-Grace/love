import { app_replace_home } from "./app_replace_home.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { marker } from "./marker.mjs";
export function app_replace() {
  let body = html_document_body();
  html_clear(body);
  marker("1");
  app_replace_home();
}
