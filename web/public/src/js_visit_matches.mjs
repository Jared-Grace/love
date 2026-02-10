import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit } from "../../../love/public/src/js_visit.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_visit_matches(ast, node_search) {
  function lambda2(la) {
    function lambda(v) {
      let node = property_get(v, "node");
      if (node === node_search) {
        la(v);
      }
    }
    js_visit(ast, lambda);
  }
  let matches = list_adder(lambda2);
  return matches;
}
