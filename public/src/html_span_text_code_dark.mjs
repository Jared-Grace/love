import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
export function html_span_text_code_dark(parent, text) {
  let span = html_span_text(parent, text);
  html_style_code_dark(span);
  return span;
}
