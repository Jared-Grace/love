import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { js_visit_calls_named_nodes } from "./js_visit_calls_named_nodes.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
export function js_call_named_argument_nodes(ast, f_name) {
  function lambda2(la) {
    function lambda(node) {
      let args = js_call_arguments_get(node);
      each(args, la);
    }
    js_visit_calls_named_nodes(ast, f_name, lambda);
  }
  let nodes = list_adder(lambda2);
  return nodes;
}
