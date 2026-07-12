import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { js_declare_single } from "./js_declare_single.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
export function js_parse_expression_from_assignment(code) {
  let right = js_code_wrap_parenthesis(code);
  let code_assign = js_code_let_assign("a", right);
  let statement = js_parse_statement(code_assign);
  let d = js_declare_single(statement);
  let init = js_declare_init_get(d);
  return init;
}
