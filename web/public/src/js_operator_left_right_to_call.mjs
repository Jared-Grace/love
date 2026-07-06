import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_operator_left_right_to_call(r2, o) {
  let right = property_get(r2, "right");
  let left = property_get(r2, "left");
  let verb = property_get(o, "verb");
  let code = js_code_call_args(verb, [left, right]);
  return code;
}
