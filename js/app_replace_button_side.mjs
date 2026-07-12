import { app_replace_button_symbol } from "./app_replace_button_symbol.mjs";
import { list_map } from "./list_map.mjs";
export function app_replace_button_side(parent, list_symbols) {
  function symbol_each(symbol) {
    let span = app_replace_button_symbol(parent, symbol);
    return span;
  }
  let mapped = list_map(list_symbols, symbol_each);
  return mapped;
}
