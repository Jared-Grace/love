import { js_code_let_assign_parse_statement } from "./js_code_let_assign_parse_statement.mjs";
import { js_declare_init_set } from "./js_declare_init_set.mjs";
export function js_declare(name, init) {
  let declare = js_code_let_assign_parse_statement(name, "a");
  js_declare_init_set(declare, init);
  return declare;
}
