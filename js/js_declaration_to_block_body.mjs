export function js_declaration_to_block_body(declaration) {
  let { body: block } = declaration;
  let { body: body_block } = block;
  return body_block;
}
