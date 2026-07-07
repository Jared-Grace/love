import { html_text_set_code_dark } from "../../../love/public/src/html_text_set_code_dark.mjs";
import { html_span } from "../../../love/public/src/html_span.mjs";
export function html_span_text_code_dark(parent, text) {
  let span = html_span(parent);
  html_text_set_code_dark(span, text);
  return span;
}
