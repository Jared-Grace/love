import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_statement_string_not_is } from "./js_statement_string_not_is.mjs";
export function js_function_declaration_statements_doing(declaration) {
  "The statements in a function that do something, with the string comments left out.";
  let statements = js_function_declaration_to_block_body(declaration);
  let doing = list_filter(statements, js_statement_string_not_is);
  return doing;
}
