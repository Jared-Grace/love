import { js_operator_division_symbol } from "../../../love/public/src/js_operator_division_symbol.mjs";
import { js_operator_division_verb } from "../../../love/public/src/js_operator_division_verb.mjs";
import { multiply } from "../../../love/public/src/multiply.mjs";
export function js_operator_division() {
  let o = {
    operator: js_operator_division_symbol(),
    verb: js_operator_division_verb(),
    left_transform: multiply,
  };
  return o;
}
