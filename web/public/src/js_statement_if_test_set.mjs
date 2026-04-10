import { property_set } from "../../../love/public/src/property_set.mjs";
export function js_statement_if_test_set(statement_if, expression) {
  property_set(statement_if, "test", expression);
}
