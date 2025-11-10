import { html_span } from "../../../love/public/src/html_span.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
export function html_span_text(parent, text) {
  let span = html_span(parent);
  html_text_set(span, text);
  return span;
}
