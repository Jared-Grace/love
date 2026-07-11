import { js_visit_identifiers_nodes } from "../../../love/public/src/js_visit_identifiers_nodes.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
export function js_identifiers_names(ast) {
  function lambda2(la) {
    function lambda(node) {
      let value = property_get(node, "name");
      la(value);
    }
    js_visit_identifiers_nodes(ast, lambda);
  }
  const names = list_adder_unique(lambda2);
  return names;
}
