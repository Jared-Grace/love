import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
export function html_script() {
  let body = html_document_body();
  let s = html_element(body, "script");
  html_text_set(component, script_body_text);
  return s;
}
