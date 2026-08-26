import { app_shared_symbol_tile_style } from "./app_shared_symbol_tile_style.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_shared_symbol_tile(parent, symbol) {
  let span = html_span_text(parent, symbol);
  app_shared_symbol_tile_style(span);
  return span;
}
