import { js_visit_identifiers_nodes } from "../../../love/public/src/js_visit_identifiers_nodes.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
export function js_identifiers(ast) {
  function lambda2(la) {
    js_visit_identifiers_nodes(ast, la);
  }
  let result = list_adder_unique(lambda2);
  return result;
}
