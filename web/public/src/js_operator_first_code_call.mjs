import { property_set_exists_not } from "../../../love/public/src/property_set_exists_not.mjs";
import { js_operator_to_code_call_only } from "../../../love/public/src/js_operator_to_code_call_only.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { js_operators_arithmetic } from "../../../love/public/src/js_operators_arithmetic.mjs";
export function js_operator_first_code_call(next) {
  let operators = js_operators_arithmetic();
  let first = list_first(operators);
  let call = js_operator_to_code_call_only(first, next);
  property_set_exists_not(first, "call", call);
  return first;
}
