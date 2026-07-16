import { arguments_assert_each } from "./arguments_assert_each.mjs";
import { js_return_is } from "./js_return_is.mjs";
import { js_expression_node_is } from "./js_expression_node_is.mjs";
import { property_set } from "./property_set.mjs";
export function js_return_argument_set(r, a) {
  arguments_assert_each(arguments, [js_return_is, js_expression_node_is]);
  property_set(r, "argument", a);
}
