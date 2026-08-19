import { arguments_assert } from "./arguments_assert.mjs";
import { js_operators_comparison } from "./js_operators_comparison.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function app_code_comparison_symbols() {
  arguments_assert(arguments, 0);
  ("the six symbols the word comparison names, which is to say ===, !==, <, >, <= and >=");
  ("The operators themselves are held with the function that works each one out beside its symbol, and a lesson choosing which comparison to write on a line wants the symbols alone. Asked here, every such lesson draws from the same six, and a comparison added to the language reaches all of them at once.");
  let operators = js_operators_comparison();
  let symbols = list_map_property(operators, "operator");
  return symbols;
}
