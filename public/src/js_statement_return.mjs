import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { js_code_return } from "../../../love/public/src/js_code_return.mjs";
export function js_statement_return(return_argument_code) {
  let code = js_code_return(return_argument_code);
  let item = js_parse_statement(code);
  return item;
}
