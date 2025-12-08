import { log } from "../../../love/public/src/log.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { html_document_head } from "../../../love/public/src/html_document_head.mjs";
export function html_link() {
  let head = html_document_head();
  let link = html_element(head, "link");
  link.onload = function lambda() {
    console.log("Stylesheet loaded!");
  };
  return l;
}
