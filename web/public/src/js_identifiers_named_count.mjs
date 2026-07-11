import { counter } from "../../../love/public/src/counter.mjs";
import { js_visit_identifiers_nodes } from "../../../love/public/src/js_visit_identifiers_nodes.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_identifiers_named_count(ast, i_name) {
  function lambda(c) {
    function lambda2(node) {
      let name = property_get(node, "name");
      if (name === i_name) {
        c();
      }
    }
    js_visit_identifiers_nodes(ast, lambda2);
  }
  let count = counter(lambda);
  return count;
}
