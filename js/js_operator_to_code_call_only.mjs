import { property_get } from "./property_get.mjs";
import { js_operator_to_code_call } from "./js_operator_to_code_call.mjs";
export function js_operator_to_code_call_only(o_f, next) {
  let r = js_operator_to_code_call(o_f, next);
  let call = property_get(r, "call");
  return call;
}
