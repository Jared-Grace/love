import { js_parse_expression_from_statement } from "../../../love/public/src/js_parse_expression_from_statement.mjs";
export function js_parse_expression(code_expression) {
  let expression = js_parse_expression_from_statement(code_expression);
  return expression;
}
