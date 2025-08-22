import { object_property_set } from "./object_property_set.mjs";
export function js_left_right_set(expression, left, right) {
  object_property_set(expression, "left", left);
  object_property_set(expression, "right", right);
}
