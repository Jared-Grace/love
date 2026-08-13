import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
export function app_code_operators_weak() {
  "The operators a code lesson solves after the others, by their symbols: + and -.";
  "The other half of the pair of classes, beside app_code_operators_strong. A lesson that mixes the two classes draws one operator from each, so a line built this way always has exactly one part that must go first.";
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let symbols = [plus, minus];
  return symbols;
}
