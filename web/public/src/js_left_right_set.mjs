import { property_set } from "../../../love/public/src/property_set.mjs";
export function js_left_right_set(expression, left, right) {
  property_set(expression, "left", left);
  property_set(expression, "right", right);
}
