import { list_get } from "./list_get.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_find_declaration_named } from "./js_find_declaration_named.mjs";
import { list_index_of_next } from "./list_index_of_next.mjs";
export function js_find_statement_after(ast, name) {
  let body = js_flo_body(ast);
  let statement = js_find_declaration_named(ast, name);
  let after = list_index_of_next(body, statement);
  let item = list_get(body, after);
  return item;
}
