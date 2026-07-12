import { html_span_text } from "./html_span_text.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
export function app_a_parenthesis_right(parent) {
  let r = js_code_parenthesis_right();
  let span = html_span_text(parent, r);
}
