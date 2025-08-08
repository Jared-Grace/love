export async function marker_remove(f_name) {
  marker();
  await function_transform(f_name, lambda);
  function lambda(ast) {
    let declaration = js_declaration_single(ast);
    let {body} = declaration;
    let {body: body2} = body;
    let code = js_code_call_statement(marker.name);
    let parsed = js_parse_statement(code);
    list_add_first(body2, parsed);
  }
}