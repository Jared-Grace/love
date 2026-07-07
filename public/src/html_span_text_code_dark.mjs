import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_span } from "../../../love/public/src/html_span.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
export function html_span_text_code_dark(parent, text) {
  let span = html_span(parent);
  html_style_code_dark(span);
  html_text_set(span, text);
  return span;
}
