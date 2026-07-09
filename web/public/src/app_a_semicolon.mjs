import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { js_code_semicolon } from "../../../love/public/src/js_code_semicolon.mjs";
export function app_a_semicolon(parent) {
  let text = js_code_semicolon();
  let span = html_span_text(parent, text);
}
