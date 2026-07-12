import { html_span_text } from "./html_span_text.mjs";
export function html_span_text_curried(parent) {
  let c = function html_span_text_curried_result(text) {
    return html_span_text(parent, text);
  };
  return c;
}
