import { data_function_current_get } from "./data_function_current_get.mjs";
import { js_visit_nodes } from "./js_visit_nodes.mjs";
import { list_adder } from "./list_adder.mjs";
import { function_parse } from "./function_parse.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { list_first } from "./list_first.mjs";
export async function function_type_first(type) {
  let f_name = await data_function_current_get();
  let { ast } = await function_parse(f_name);
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
