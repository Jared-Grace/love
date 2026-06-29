import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_flo_body } from "../../../love/public/src/js_flo_body.mjs";
export function js_statement_add_before_return(ast, item) {
  let body_block = js_flo_body(ast);
  list_add(body_block, item);
}
