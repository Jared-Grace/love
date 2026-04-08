import { js_visit } from "../../../love/public/src/js_visit.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { js_flo_body } from "../../../love/public/src/js_flo_body.mjs";
export function js_statement_first(ast) {
  let body_block = js_flo_body(ast);
  let first = list_first(body_block);
  let code = js_unparse(first);
  function lambda(v) {}
  js_visit(ast2, lambda);
  return code;
}
