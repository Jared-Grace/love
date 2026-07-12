import { list_add_first } from "./list_add_first.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
export function js_flo_body_add_first(ast, item) {
  let body_block = js_flo_body(ast);
  list_add_first(body_block, item);
}
