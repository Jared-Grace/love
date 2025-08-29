import { list_add } from "./list_add.mjs";
import { js_declaration_single_block_body } from "./js_declaration_single_block_body.mjs";
import { js_statement_return_empty } from "./js_statement_return_empty.mjs";
export function js_declaration_single_block_body_add_return(ast) {
  let r = js_statement_return_empty();
  let body_block = js_declaration_single_block_body(ast);
  list_add(body_block, r);
}
