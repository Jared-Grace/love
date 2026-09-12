import { arguments_assert } from "./arguments_assert.mjs";
import { js_operators_comparison_symbols } from "./js_operators_comparison_symbols.mjs";
import { js_operator_double_equal_symbol } from "./js_operator_double_equal_symbol.mjs";
import { js_operator_bang_equal_symbol } from "./js_operator_bang_equal_symbol.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_operators_comparing() {
  arguments_assert(arguments, 0);
  ("every operator javascript works out at the strength of a comparison, by its symbol: the six a lesson teaches, and == and != standing beside them");
  ("A STRENGTH class, and not a lesson class. What a lesson may write on a line is the six, that list is asked for in its own place, and it stays six. This one answers a different question - how tightly does javascript hold this sign - so it has to hold every sign there is at that strength, taught or not, because the printer meets whatever a shape was built with.");
  ("== and != are the two a learner is never shown, on purpose: the three-sign form is the one worth teaching. They are still operators this app can work out, so a shape may hold one, and an operator nobody has given a strength is the exact fault this class exists to rule out.");
  let taught = js_operators_comparison_symbols();
  let loose_equal = js_operator_double_equal_symbol();
  let loose_not_equal = js_operator_bang_equal_symbol();
  let loose = [loose_equal, loose_not_equal];
  let symbols = list_concat(taught, loose);
  return symbols;
}
