import { list_first } from "./list_first.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
export function js_statement_first(ast) {
  let body_block = js_flo_body(ast);
  let first = list_first(body_block);
  return first;
}
