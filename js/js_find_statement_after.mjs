export function js_find_statement_after(ast, name) {
  let body = js_flo_body(ast);
  let statement = js_find_declaration_named(ast, name);
  let after = list_index_of_next(body, statement);
  return after;
}
