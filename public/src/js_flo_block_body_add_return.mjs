import { js_statement_return_empty_add } from "../../../love/public/src/js_statement_return_empty_add.mjs";
import { js_flo_block_body } from "../../../love/public/src/js_flo_block_body.mjs";
export function js_flo_block_body_add_return(ast) {
  let body_block = js_flo_block_body(ast);
  let r = js_statement_return_empty_add(body_block);
  return r;
}
