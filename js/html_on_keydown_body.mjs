import { html_on_keydown } from "./html_on_keydown.mjs";
import { html_document_body } from "./html_document_body.mjs";
export function html_on_keydown_body(lambda) {
  let body = html_document_body();
  html_on_keydown(body, lambda);
}
