import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { js_code_parenthesis_left } from "../../../love/public/src/js_code_parenthesis_left.mjs";
export function app_a_parenthesis_left(parent) {
  let l = js_code_parenthesis_left();
  let span = html_span_text(parent, l);
}
