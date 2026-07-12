import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_asterisk_verb } from "./js_operator_asterisk_verb.mjs";
import { identity } from "./identity.mjs";
import { multiply } from "./multiply.mjs";
export function js_operator_asterisk() {
  let o = {
    operator: js_operator_asterisk_symbol(),
    verb: js_operator_asterisk_verb(),
    left_transform: identity,
    fn: multiply,
  };
  return o;
}
