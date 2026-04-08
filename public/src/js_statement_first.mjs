import { equal } from "../../../love/public/src/equal.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit } from "../../../love/public/src/js_visit.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { js_flo_body } from "../../../love/public/src/js_flo_body.mjs";
export function js_statement_first(ast) {
  let body_block = js_flo_body(ast);
  let first = list_first(body_block);
  let code = js_unparse(first);
  let result = null;
  let i = -1;
  function lambda(v) {
    let node = property_get(v, "node");
    if (equal(node, first)) {
      result = i;
    }
    i++;
  }
  js_visit(ast, lambda);
  return code;
}
