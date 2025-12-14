import { html_on_keydown } from "../../../love/public/src/html_on_keydown.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
export function html_on_keydown_body(lambda) {
  const body = html_document_body();
  html_on_keydown(body, lambda);
}
