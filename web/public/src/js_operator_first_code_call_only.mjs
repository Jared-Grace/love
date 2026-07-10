import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_operator_first_code_call } from "../../../love/public/src/js_operator_first_code_call.mjs";
export function js_operator_first_code_call_only(next) {
  let first = js_operator_first_code_call(next);
  let code = property_get(first, "code");
  return first;
}
