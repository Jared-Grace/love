import { js_statement_return_insert } from "./js_statement_return_insert.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_statement_return_insert_code(body_block, index, code) {
  let expression = js_parse_expression(code);
  js_statement_return_insert(body_block, index, expression);
}
