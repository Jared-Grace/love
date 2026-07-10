import { property_transform } from "../../../love/public/src/property_transform.mjs";
import { js_operator_to_code_call } from "../../../love/public/src/js_operator_to_code_call.mjs";
export function js_operator_to_code_call_only(o_f, next) {
  let r = js_operator_to_code_call(o_f, next);
  let call = property_transform(r, "call", lambda);
  return call;
}
