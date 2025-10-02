import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
export function html_span_text(container, text) {
  let span = html_element(container, "span");
  html_text_set(span, text);
}
