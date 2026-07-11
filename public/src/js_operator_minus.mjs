import { js_operator_minus_symbol } from "../../../love/public/src/js_operator_minus_symbol.mjs";
import { js_operator_minus_verb } from "../../../love/public/src/js_operator_minus_verb.mjs";
import { add } from "../../../love/public/src/add.mjs";
export function js_operator_minus() {
  let o = {
    operator: js_operator_minus_symbol(),
    verb: js_operator_minus_verb(),
    left_transform: add,
  };
  return o;
}
