import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { js_operator_less_than_equal_symbol } from "./js_operator_less_than_equal_symbol.mjs";
import { js_operator_greater_than_equal_symbol } from "./js_operator_greater_than_equal_symbol.mjs";
export function app_code_operators_relating() {
  arguments_assert(arguments, 0);
  ("every operator javascript works out at the strength of asking which of two things is bigger, by its symbol: <, >, <= and >=");
  ("A STRENGTH class, one above the ones asking whether two things are the same, since javascript works these out first: 5 == 7 > 4 is 5 == (7 > 4)");
  let less = js_operator_less_than_symbol();
  let greater = js_operator_greater_than_symbol();
  let less_equal = js_operator_less_than_equal_symbol();
  let greater_equal = js_operator_greater_than_equal_symbol();
  let symbols = [less, greater, less_equal, greater_equal];
  return symbols;
}
