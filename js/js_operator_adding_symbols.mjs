import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
export function js_operator_adding_symbols() {
  "The two signs that add and take away, as they are written.";
  "They are named together because what can be said about one is exactly what can be said about the other: each keeps its own sign standing in front of the number it belongs to, which is what lets a run of them be written in any order without saying anything different.";
  let plus_sign = js_operator_plus_symbol();
  let minus_sign = js_operator_minus_symbol();
  let symbols = [plus_sign, minus_sign];
  return symbols;
}
