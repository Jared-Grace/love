import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_operator_to_code_call } from "../../../love/public/src/js_operator_to_code_call.mjs";
export function js_operator_to_code_call_only(o_f, next) {
  let r = js_operator_to_code_call(o_f, next);
  let code = property_get(r, "call");
  return code;
}
