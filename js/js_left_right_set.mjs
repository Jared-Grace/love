import { arguments_assert_each } from "./arguments_assert_each.mjs";
import { js_left_right_is } from "./js_left_right_is.mjs";
import { js_expression_node_is } from "./js_expression_node_is.mjs";
import { property_set } from "./property_set.mjs";
export function js_left_right_set(expression, left, right) {
  arguments_assert_each(arguments, [
    js_left_right_is,
    js_expression_node_is,
    js_expression_node_is,
  ]);
  property_set(expression, "left", left);
  property_set(expression, "right", right);
}
