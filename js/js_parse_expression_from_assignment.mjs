import { js_code_let_assign_parse_statement } from "./js_code_let_assign_parse_statement.mjs";
import { js_declare_single_init } from "./js_declare_single_init.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
export function js_parse_expression_from_assignment(code) {
  let right = js_code_wrap_parenthesis(code);
  let statement = js_code_let_assign_parse_statement("a", right);
  let init = js_declare_single_init(statement);
  return init;
}
