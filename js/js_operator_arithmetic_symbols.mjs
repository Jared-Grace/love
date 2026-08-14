import { js_operator_adding_symbols } from "./js_operator_adding_symbols.mjs";
import { js_operator_scaling_symbols } from "./js_operator_scaling_symbols.mjs";
import { lists_combine } from "./lists_combine.mjs";
export function js_operator_arithmetic_symbols() {
  "The four signs that do arithmetic, as they are written - adding and taking away, multiplying and dividing.";
  "Built from the two pairs rather than written out again, so a sign can only ever be added to arithmetic in one place. A list spelled out here as well would be the same four names in a second copy, and the copy is what quietly disagrees later.";
  let adding = js_operator_adding_symbols();
  let scaling = js_operator_scaling_symbols();
  let symbols = lists_combine([adding, scaling]);
  return symbols;
}
