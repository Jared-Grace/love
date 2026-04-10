import { js_node_type_is_assert } from "../../../love/public/src/js_node_type_is_assert.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
export function js_statement_if_test_set(statement_if, expression) {
  js_node_type_is_assert(statement_if, "IfStatement");
  property_set(statement_if, "test", expression);
}
