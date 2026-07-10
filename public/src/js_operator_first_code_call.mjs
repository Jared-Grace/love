import { js_operator_to_code_call_only } from "../../../love/public/src/js_operator_to_code_call_only.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { js_operators } from "../../../love/public/src/js_operators.mjs";
export function js_operator_first_code_call(next) {
  let operators1 = js_operators();
  let o_f = list_first(operators1);
  let verb = property_get(o_f, "verb");
  let code = js_operator_to_code_call_only(o_f, next);
  let r2 = {
    verb,
    code,
  };
  return r2;
}
