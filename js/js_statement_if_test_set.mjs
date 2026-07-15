import { arguments_assert_each } from "./arguments_assert_each.mjs";
import { js_statement_if_is } from "./js_statement_if_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { property_set } from "./property_set.mjs";
export function js_statement_if_test_set(statement_if, expression) {
  arguments_assert_each(arguments, [js_statement_if_is, js_node_is]);
  property_set(statement_if, "test", expression);
}
