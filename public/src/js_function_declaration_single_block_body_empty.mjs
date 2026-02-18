import { list_empty } from "../../../love/public/src/list_empty.mjs";
import { js_function_declaration_single_block_body } from "../../../love/public/src/js_function_declaration_single_block_body.mjs";
export function js_function_declaration_single_block_body_empty(ast) {
  let body_block = js_function_declaration_single_block_body(ast);
  list_empty(body_block);
  return body_block;
}
