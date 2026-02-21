import { js_parse_expression_from_assignment } from "../../../love/public/src/js_parse_expression_from_assignment.mjs";
export function js_parse_expression(code_expression) {
  let expression = js_parse_expression_from_assignment(code_expression);
  return expression;
}
