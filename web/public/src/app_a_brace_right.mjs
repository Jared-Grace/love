import { js_code_brace_right } from "../../../love/public/src/js_code_brace_right.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
export function app_a_brace_right(parent) {
  let text = js_code_brace_right();
  let span6 = html_span_text(parent, text);
  return span6;
}
