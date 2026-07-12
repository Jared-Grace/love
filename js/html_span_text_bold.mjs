import { html_bold } from "./html_bold.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_span_text_bold(p, text) {
  let span = html_span_text(p, text);
  html_bold(span);
}
