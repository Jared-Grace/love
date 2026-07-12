import { js_visit_identifiers_nodes } from "./js_visit_identifiers_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_identifiers_names(ast) {
  function lambda2(la) {
    function lambda(node) {
      let value = property_get(node, "name");
      la(value);
    }
    js_visit_identifiers_nodes(ast, lambda);
  }
  let names = list_adder_unique(lambda2);
  return names;
}
