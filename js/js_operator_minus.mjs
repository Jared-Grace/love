import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_minus_verb } from "./js_operator_minus_verb.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
export function js_operator_minus() {
  let o = {
    operator: js_operator_minus_symbol(),
    verb: js_operator_minus_verb(),
    left_transform: add,
    fn: subtract,
  };
  return o;
}
