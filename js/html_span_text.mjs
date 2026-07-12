import { html_span } from "./html_span.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function html_span_text(parent, text) {
  let span = html_span(parent);
  html_text_set(span, text);
  return span;
}
