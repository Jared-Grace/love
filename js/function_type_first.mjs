import { property_get } from "./property_get.mjs";
import { js_visit_nodes } from "./js_visit_nodes.mjs";
import { list_adder } from "./list_adder.mjs";
import { function_parse_unaliased } from "./function_parse_unaliased.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { list_first } from "./list_first.mjs";
export async function function_type_first(f_name, type) {
  let v = await function_parse_unaliased(f_name);
  let ast = property_get(v, "ast");
  function lambda2(la) {
    function lambda(node) {
      if (js_node_type(node) === type) {
        la(node);
      }
    }
    js_visit_nodes(ast, lambda);
  }
  let list = list_adder(lambda2);
  let first = list_first(list);
  return first;
}
