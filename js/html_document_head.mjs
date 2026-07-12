import { html_component_wrap } from "./html_component_wrap.mjs";
export function html_document_head() {
  let head_e = document.head;
  let head = html_component_wrap(head_e);
  return head;
}
