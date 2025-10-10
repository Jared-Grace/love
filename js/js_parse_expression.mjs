import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
export function js_parse_expression(code_expression) {
  let statement = js_parse_statement(code_expression);
  let expression = object_property_get(statement, "expression");
  return expression;
}
