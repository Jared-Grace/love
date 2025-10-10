import { html_attribute_set } from "../../../love/public/src/html_attribute_set.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { html_document_head } from "../../../love/public/src/html_document_head.mjs";
export function html_meta_viewport() {
  const head = html_document_head();
  let component = html_element(head, "meta");
  html_attribute_set(component, "name", "viewport");
  html_attribute_set(
    component,
    "content",
    "width=device-width, initial-scale=1.0",
  );
}
