import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_division_verb } from "./js_operator_division_verb.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
export function js_operator_division() {
  let o = {
    operator: js_operator_division_symbol(),
    verb: js_operator_division_verb(),
    left_transform: multiply,
    fn: divide,
  };
  return o;
}
