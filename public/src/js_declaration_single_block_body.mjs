import { js_declaration_to_block_body } from "./js_declaration_to_block_body.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
export function js_declaration_single_block_body(ast) {
  let declaration = js_declaration_single(ast);
  let body_block = js_declaration_to_block_body(declaration);
  return body_block;
}
