import { equal_not } from "./equal_not.mjs";
import { app_code_comparison_symbols } from "./app_code_comparison_symbols.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_code_comparison_symbols_not_equality() {
  arguments_assert(arguments, 0);
  ("the five comparison symbols that are not ===, which is to say <, >, <= , >= and !==");
  ("A lesson that has taught one line with === in the middle has taught the shape of the line, not the comparison in it. The five left over are what is still owed, and asking for them by what they are NOT is what keeps the two halves adding up to six however the six are later listed.");
  ("Taken from the one list that says which six operators the word comparison names, so a comparison added to that list arrives here without anything being written down twice.");
  let symbols = app_code_comparison_symbols();
  let equality = js_operator_triple_equal_symbol();
  function lambda(symbol) {
    "every symbol except the one that asks whether two values are the same";
    let other = equal_not(symbol, equality);
    return other;
  }
  let others = list_filter(symbols, lambda);
  return others;
}
