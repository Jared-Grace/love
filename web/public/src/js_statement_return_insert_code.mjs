import { js_statement_return_insert } from "../../../love/public/src/js_statement_return_insert.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
export function js_statement_return_insert_code(body_block, index, code) {
  let expression = js_parse_expression(code);
  js_statement_return_insert(body_block, index, expression);
}
