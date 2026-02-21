import { list_empty } from "../../../love/public/src/list_empty.mjs";
import { js_flo_body } from "../../../love/public/src/js_flo_body.mjs";
export function js_flo_body_empty(ast) {
  let body_block = js_flo_body(ast);
  list_empty(body_block);
  return body_block;
}
