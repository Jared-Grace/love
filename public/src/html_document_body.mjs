import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
export function html_document_body() {
  let body_element = document.body;
  let body = html_component_wrap(body_element);
  return body;
}
