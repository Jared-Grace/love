import { app_shared_symbol_tile } from "./app_shared_symbol_tile.mjs";
import { list_map } from "./list_map.mjs";
export function app_replace_button_side(parent, list_symbols) {
  function symbol_each(symbol) {
    let span = app_shared_symbol_tile(parent, symbol);
    return span;
  }
  let mapped = list_map(list_symbols, symbol_each);
  return mapped;
}
