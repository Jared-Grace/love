import { property_set_if_exists_not } from "../../../love/public/src/property_set_if_exists_not.mjs";
import { js_operator_left_right_to_code_call } from "../../../love/public/src/js_operator_left_right_to_code_call.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_operator_to_expression } from "../../../love/public/src/js_operator_to_expression.mjs";
export function js_operator_to_code_call(o, next) {
  let e = js_operator_to_expression(o, next);
  let question = property_get(e, "expression");
  let answer = js_operator_left_right_to_code_call(o, e);
  property_set_if_exists_not(a, p, value);
  let r = {
    question,
    answer,
  };
  return r;
}
