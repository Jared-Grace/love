import { property_get } from "./property_get.mjs";
import { js_statement_if_is_assert } from "./js_statement_if_is_assert.mjs";
export function js_statement_if_test_get(statement_if) {
  js_statement_if_is_assert(statement_if);
  let value = property_get(statement_if, "test");
  return value;
}
