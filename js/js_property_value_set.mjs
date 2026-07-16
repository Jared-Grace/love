import { arguments_assert_each } from "./arguments_assert_each.mjs";
import { js_property_is } from "./js_property_is.mjs";
import { js_expression_node_is } from "./js_expression_node_is.mjs";
import { property_set } from "./property_set.mjs";
export function js_property_value_set(p, value) {
  arguments_assert_each(arguments, [js_property_is, js_expression_node_is]);
  property_set(p, "value", value);
}
