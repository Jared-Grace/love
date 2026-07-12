import { html_element } from "./html_element.mjs";
import { html_document_head } from "./html_document_head.mjs";
export function html_link() {
  let head = html_document_head();
  let link = html_element(head, "link");
  return link;
}
