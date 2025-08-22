export function js_declaration_to_block_body(declaration) {
  let { body } = declaration;
  let { body: body_block } = body;
  return body_block;
}
