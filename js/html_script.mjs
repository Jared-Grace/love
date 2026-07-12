import { html_text_set } from "./html_text_set.mjs";
import { html_element } from "./html_element.mjs";
import { html_document_body } from "./html_document_body.mjs";
export function html_script(script_body_text) {
  let body = html_document_body();
  let s = html_element(body, "script");
  html_text_set(s, script_body_text);
  return s;
}
