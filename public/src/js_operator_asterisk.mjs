import { js_operator_asterisk_symbol } from "../../../love/public/src/js_operator_asterisk_symbol.mjs";
import { js_operator_asterisk_verb } from "../../../love/public/src/js_operator_asterisk_verb.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
import { multiply } from "../../../love/public/src/multiply.mjs";
export function js_operator_asterisk() {
  let o = {
    operator: js_operator_asterisk_symbol(),
    verb: js_operator_asterisk_verb(),
    left_transform: identity,
    fn: multiply,
  };
  return o;
}
