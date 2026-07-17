import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_element } from "./html_element.mjs";
import { html_document_head } from "./html_document_head.mjs";
import { html_meta_viewport_content } from "./html_meta_viewport_content.mjs";
export function html_meta_viewport() {
  "TODO: redundant — html_code now emits this tag statically into every generated page, so this runtime copy does nothing new";
  "Injecting it here races the browser's first layout, which was the Firefox Android random zoom-in bug (intermittent because it is a race)";
  "Kept only until that zoom is confirmed gone in the wild; then delete this function and its call in html_mobile_default";
  let head = html_document_head();
  let component = html_element(head, "meta");
  html_attribute_set(component, "name", "viewport");
  html_attribute_set(component, "content", html_meta_viewport_content());
}
