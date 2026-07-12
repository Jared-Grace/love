import { js_visit_identifiers_nodes } from "./js_visit_identifiers_nodes.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_identifiers(ast) {
  function lambda(la) {
    js_visit_identifiers_nodes(ast, la);
  }
  let result = list_adder_unique(lambda);
  return result;
}
