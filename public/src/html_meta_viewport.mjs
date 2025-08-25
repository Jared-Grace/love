import {html_attribute_set} from "./html_attribute_set.mjs";
import {html_element} from "./html_element.mjs";
import {html_document_head} from "./html_document_head.mjs";
export function html_meta_viewport() {
  const head = html_document_head();
  let component = html_element(head, "meta");
  html_attribute_set(component, "name", "viewport");
  html_attribute_set(component, "content", "width=device-width, initial-scale=1.0");
}
