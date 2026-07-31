import { list_next } from "./list_next.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_find_declaration_named } from "./js_find_declaration_named.mjs";
export function js_find_statement_after(ast, name) {
  let body = js_flo_body(ast);
  let statement = js_find_declaration_named(ast, name);
  let item = list_next(body, statement);
  return item;
}
