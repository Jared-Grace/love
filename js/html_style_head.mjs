import { html_text_set } from "./html_text_set.mjs";
import { html_element } from "./html_element.mjs";
import { html_document_head } from "./html_document_head.mjs";
export function html_style_head(style_text) {
  let parent = html_document_head();
  let component = html_element(parent, "style");
  html_text_set(component, style_text);
}
