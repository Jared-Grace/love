import { js_visit_id } from "../../../love/public/src/js_visit_id.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { js_flo_body } from "../../../love/public/src/js_flo_body.mjs";
export function js_statement_first(ast) {
  let body_block = js_flo_body(ast);
  let first = list_first(body_block);
  return first
}
