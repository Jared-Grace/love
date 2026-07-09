import { js_operator_left_right_to_call } from "../../../love/public/src/js_operator_left_right_to_call.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_operator_to_expression } from "../../../love/public/src/js_operator_to_expression.mjs";
export function js_operator_to_call(o, next) {
  let e = js_operator_to_expression(o, next);
  let question = property_get(e, "expression");
  let answer = js_operator_left_right_to_call(o, e);
  let r = {
    question,
    answer,
  };
  return r;
}
