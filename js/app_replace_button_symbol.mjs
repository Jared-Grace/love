import { app_replace_button_symbol_style } from "./app_replace_button_symbol_style.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_replace_button_symbol(parent, symbol) {
  let span = html_span_text(parent, symbol);
  app_replace_button_symbol_style(span);
  return span;
}
