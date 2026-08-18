import { arguments_assert } from "./arguments_assert.mjs";
import { js_operators_comparison } from "./js_operators_comparison.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function app_code_operator_comparison_is(symbol) {
  arguments_assert(arguments, 1);
  ("whether one operator symbol is one of the six that compare two values and answer true or false");
  ("Asked wherever a line holds both kinds at once - arithmetic on each side of a comparison - because what a part of such a line comes to depends on which kind it is, and a screen that offers true and false for 3 + 4 is asking a question the line never posed.");
  ("Asked of the one list the code lessons already call the comparisons, so a seventh comparison added there is a comparison here too, with nothing to remember.");
  let operators = js_operators_comparison();
  let symbols = list_map_property(operators, "operator");
  let comparison_is = list_includes(symbols, symbol);
  return comparison_is;
}
