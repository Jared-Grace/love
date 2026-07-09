import { js_code_binary_spaced_nb } from "../../../love/public/src/js_code_binary_spaced_nb.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_operator_to_expression(o, next) {
  let operator = property_get(o, "operator");
  let left_transform = property_get(o, "left_transform");
  let left = next();
  let right = next();
  left = left_transform(left, right);
  let expression = js_code_binary_spaced_nb(left, operator, right);
  let r = {
    left,
    right,
    expression,
  };
  return r;
}
