import { html_style_code_dark_text } from "../../../love/public/src/html_style_code_dark_text.mjs";
import { html_span } from "../../../love/public/src/html_span.mjs";
export function html_span_text_code_dark(parent, text) {
  let span = html_span(parent);
  html_style_code_dark_text(span, text);
  return span;
}
