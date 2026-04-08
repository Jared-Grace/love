import { js_visit_id } from "../../../love/public/src/js_visit_id.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { js_flo_body } from "../../../love/public/src/js_flo_body.mjs";
export function js_statement_first(ast) {
  let body_block = js_flo_body(ast);
  let first = list_first(body_block);
  let code = js_unparse(first);
  js_visit_id(ast, first);
  return code;
}
