import { js_code_call_args } from "./js_code_call_args.mjs";
import { property_get } from "./property_get.mjs";
export function js_operator_left_right_to_code_call(operator, left_right) {
  let right = property_get(left_right, "right");
  let left = property_get(left_right, "left");
  let verb = property_get(operator, "verb");
  let code = js_code_call_args(verb, [left, right]);
  return code;
}
