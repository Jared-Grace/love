import { function_new_declaration } from "./function_new_declaration.mjs";
import { js_code_declaration } from "./js_code_declaration.mjs";
import { function_open } from "./function_open.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
export async function function_new(f_name) {
  const code_declaration = js_code_declaration(f_name, "", false);
  let declaration = js_parse_statement_module(code_declaration);
  await function_new_declaration(declaration);
  await function_open(f_name);
}
