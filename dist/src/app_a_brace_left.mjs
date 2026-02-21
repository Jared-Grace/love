import { js_code_brace_left } from "../../../love/public/src/js_code_brace_left.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
export function app_a_brace_left(parent) {
  let text = js_code_brace_left();
  let span6 = html_span_text(parent, text);
  return span6;
}
