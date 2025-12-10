import { html_element } from "../../../love/public/src/html_element.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
export function html_script() {
  let body = html_document_body();
  let s = html_element(body, "script");
  return s;
}
