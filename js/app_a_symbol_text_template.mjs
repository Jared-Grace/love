import { app_a_color_literal } from "./app_a_color_literal.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { js_symbol_string_template } from "./js_symbol_string_template.mjs";
export function app_a_symbol_text_template(parent) {
  let text = js_symbol_string_template();
  let s = html_span_text(parent, text);
  app_a_color_literal(s);
  return s;
}
