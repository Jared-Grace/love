import { property_get } from "./property_get.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
export function js_parse_expression_from_statement(code_expression) {
  let statement = js_parse_statement(code_expression);
  let expression = property_get(statement, "expression");
  return expression;
}
