import { counter } from "./counter.mjs";
import { js_visit_identifiers_nodes } from "./js_visit_identifiers_nodes.mjs";
import { property_get } from "./property_get.mjs";
export function js_identifiers_named_count(ast, i_name) {
  function lambda3(c) {
    function lambda2(node) {
      let name = property_get(node, "name");
      if (name === i_name) {
        c();
      }
    }
    js_visit_identifiers_nodes(ast, lambda2);
  }
  let count = counter(lambda3);
  return count;
}
