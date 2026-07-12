import { js_statement_if_is_assert } from "./js_statement_if_is_assert.mjs";
import { property_set } from "./property_set.mjs";
export function js_statement_if_test_set(statement_if, expression) {
  js_statement_if_is_assert(statement_if);
  property_set(statement_if, "test", expression);
}
