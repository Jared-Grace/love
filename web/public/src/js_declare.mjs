import { js_declare_init_set } from "./js_declare_init_set.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
export function js_declare(name, init) {
  let assign_code = js_code_let_assign(name, "a");
  let assign = js_parse_statement(assign_code);
  js_declare_init_set(assign, init);
  return assign;
}
