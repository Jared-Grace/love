import { list_clear } from "./list_clear.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
export function js_flo_body_empty(ast) {
  let body_block = js_flo_body(ast);
  list_clear(body_block);
  return body_block;
}
