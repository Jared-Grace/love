import { html_span } from "../../../love/public/src/html_span.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
export function html_span_code_dark(parent) {
  let span = html_span(parent);
  html_style_code_dark(span);
  return span;
}
