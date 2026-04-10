import { js_statement_if_is_assert } from "../../../love/public/src/js_statement_if_is_assert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_statement_if_consequent_get(statement_if) {
  js_statement_if_is_assert(statement_if);
  let consequent = property_get(statement_if, "consequent");
  return consequent;
}
