import { html_attribute_set } from "../../../love/public/src/html_attribute_set.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { html_document_head } from "../../../love/public/src/html_document_head.mjs";
export function html_roboto() {
  let head = html_document_head();
  let l = html_element(head, "link");
  html_attribute_set(
    l,
    "href",
    "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
  );
  html_attribute_set(l, "rel", "stylesheet");
}
