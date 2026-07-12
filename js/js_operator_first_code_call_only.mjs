import { property_get } from "./property_get.mjs";
import { js_operator_first_code_call } from "./js_operator_first_code_call.mjs";
export function js_operator_first_code_call_only(next) {
  let first = js_operator_first_code_call(next);
  let call = property_get(first, "call");
  return call;
}
