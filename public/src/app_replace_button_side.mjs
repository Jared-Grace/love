import { html_style_set } from "../../../love/public/src/html_style_set.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_replace_button_symbol_style } from "../../../love/public/src/app_replace_button_symbol_style.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
export function app_replace_button_side(parent, list_symbols) {
  function symbol_each(symbol) {
    let span = html_span_text(parent, symbol);
    app_replace_button_symbol_style(span);
    html_style_set(span, "display", "inline-block");
    return span;
  }
  let mapped = list_map(list_symbols, symbol_each);
  return mapped;
}
