import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { js_code_function_declaration } from "./js_code_function_declaration.mjs";
import { property_get } from "./property_get.mjs";
export function js_function_declaration(declaration, f_name) {
  let async_is = property_get(declaration, "async");
  let code = js_code_function_declaration(f_name, "", async_is);
  let declaration_lambda = js_parse_statement_module(code);
  return declaration_lambda;
}
