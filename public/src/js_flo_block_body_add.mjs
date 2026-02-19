import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_flo_block_body } from "../../../love/public/src/js_flo_block_body.mjs";
export function js_flo_block_body_add(ast, item) {
  let body_block = js_flo_block_body(ast);
  list_add(body_block, item);
}
