import { property_set } from "./property_set.mjs";
import { js_statement_if_is_assert } from "./js_statement_if_is_assert.mjs";
export function js_statement_if_consequent_set(statement_if, value) {
  js_statement_if_is_assert(statement_if);
  let consequent = property_set(statement_if, "consequent", value);
  return consequent;
}
