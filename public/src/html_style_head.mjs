import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { html_document_head } from "../../../love/public/src/html_document_head.mjs";
export function html_style_head(style_text) {
  let parent = html_document_head();
  let component = html_element(parent, "style");
  html_text_set(component, style_text);
}
