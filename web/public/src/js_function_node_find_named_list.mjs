import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { js_visit_function_nodes_named } from "../../../love/public/src/js_visit_function_nodes_named.mjs";
export function js_function_node_find_named_list(ast, name) {
  function lambda(la) {
    js_visit_function_nodes_named(ast, la, name);
  }
  let list = list_adder(lambda);
  return list;
}
