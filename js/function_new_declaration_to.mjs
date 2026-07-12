import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { js_code_function_declaration } from "./js_code_function_declaration.mjs";
export function function_new_declaration_to(f_name) {
  let code_declaration = js_code_function_declaration(f_name, "", false);
  let declaration = js_parse_statement_module(code_declaration);
  return declaration;
}
