import { js_operator_plus_symbol } from "../../../love/public/src/js_operator_plus_symbol.mjs";
import { js_operator_plus_verb } from "../../../love/public/src/js_operator_plus_verb.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
export function js_operator_plus() {
  let o = {
    operator: js_operator_plus_symbol(),
    verb: js_operator_plus_verb(),
    left_transform: identity,
  };
  return o;
}
