import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_a_brace_left(parent) {
  let text = js_code_brace_left();
  let span = html_span_text(parent, text);
  return span;
}
