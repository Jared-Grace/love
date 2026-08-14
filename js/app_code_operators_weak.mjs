import { js_operator_adding_symbols } from "./js_operator_adding_symbols.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_code_operators_weak() {
  "The operators a code lesson solves after the others, by their symbols: + and -.";
  ("The other half of the pair of classes, beside ",
    fn_name("app_code_operators_strong"),
    ". A lesson that mixes the two classes draws one operator from each, so a line built this way always has exactly one part that must go first.");
  let symbols = js_operator_adding_symbols();
  return symbols;
}
