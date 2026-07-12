import { list_add } from "./list_add.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
export function js_flo_body_add(ast, item) {
  let body_block = js_flo_body(ast);
  list_add(body_block, item);
}
