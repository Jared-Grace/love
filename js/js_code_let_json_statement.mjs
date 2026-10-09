import { json_to } from "./json_to.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
export function js_code_let_json_statement(name, value) {
  "let name = value; with the value written as JSON";
  let right = json_to(value);
  let setup = js_code_let_statement(name, right);
  return setup;
}
