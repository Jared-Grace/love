import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_a_brace_right(parent) {
  let text = js_code_brace_right();
  let span = html_span_text(parent, text);
  return span;
}
