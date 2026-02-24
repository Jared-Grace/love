import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_return_above_combine(ast) {
  function lambda(v) {
    let node = property_get(v, "node");
    let e1 = list_get_end_1(stack);
  }
  js_visit_type(ast, "ReturnStatement", lambda);
  return;
}
