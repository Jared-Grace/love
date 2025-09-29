import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { js_visit_nodes } from "../../../love/public/src/js_visit_nodes.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { function_parse } from "../../../love/public/src/function_parse.mjs";
import { js_node_type } from "../../../love/public/src/js_node_type.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export async function function_type_first(type) {
  let f_name = await function_current_get();
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
