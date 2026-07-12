import { html_span_text } from "./html_span_text.mjs";
import { js_code_comma } from "./js_code_comma.mjs";
export function app_a_comma(parent) {
  let c = js_code_comma();
  let span = html_span_text(parent, c);
}
