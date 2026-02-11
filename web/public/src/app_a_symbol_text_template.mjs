import { app_a_color_literal } from "../../../love/public/src/app_a_color_literal.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { js_symbol_string_template } from "../../../love/public/src/js_symbol_string_template.mjs";
export function app_a_symbol_text_template(parent) {
  let text = js_symbol_string_template();
  let s = html_span_text(parent, text);
  app_a_color_literal(s);
  return s;
}
