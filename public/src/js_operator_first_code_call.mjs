import { property_set_exists_not } from "../../../love/public/src/property_set_exists_not.mjs";
import { js_operator_to_code_call_only } from "../../../love/public/src/js_operator_to_code_call_only.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { js_operators } from "../../../love/public/src/js_operators.mjs";
export function js_operator_first_code_call(next) {
  let operators1 = js_operators();
  let first = list_first(operators1);
  let code = js_operator_to_code_call_only(first, next);
  property_set_exists_not(first, "code", code);
  return first;
}
