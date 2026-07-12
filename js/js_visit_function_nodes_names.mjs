import { js_visit_function_nodes } from "./js_visit_function_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
export function js_visit_function_nodes_names(ast) {
  function lambda2(la) {
    function lambda_declaration(v) {
      let node = property_get(v, "node");
      let id = property_get(node, "id");
      let is_identifier = js_identifier_is(id);
      if (is_identifier) {
        let name = property_get(id, "name");
        la(name);
      }
    }
    js_visit_function_nodes(ast, lambda_declaration);
  }
  let names = list_adder_unique(lambda2);
  return names;
}
