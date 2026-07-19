import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_plus_verb } from "./js_operator_plus_verb.mjs";
import { identity } from "./identity.mjs";
import { add } from "./add.mjs";
export function js_operator_plus() {
  let o = {
    operator: js_operator_plus_symbol(),
    verb: js_operator_plus_verb(),
    left_transform: identity,
    fn: add,
  };
  return o;
}
