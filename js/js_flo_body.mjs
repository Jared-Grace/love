import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { js_flo } from "./js_flo.mjs";
export function js_flo_body(ast) {
  let declaration = js_flo(ast);
  let body_block = js_function_declaration_to_block_body(declaration);
  return body_block;
}
