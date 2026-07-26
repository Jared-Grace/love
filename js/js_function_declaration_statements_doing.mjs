import { property_get } from "./property_get.mjs";
import { js_block_body_get } from "./js_block_body_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_statement_string_not_is } from "./js_statement_string_not_is.mjs";
export function js_function_declaration_statements_doing(declaration) {
  "The statements in a function that do something, with the string comments left out.";
  let block = property_get(declaration, "body");
  let statements = js_block_body_get(block);
  let doing = list_filter(statements, js_statement_string_not_is);
  return doing;
}
