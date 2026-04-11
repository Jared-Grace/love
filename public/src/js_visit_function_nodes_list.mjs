import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_to } from "../../../love/public/src/list_to.mjs";
import { js_visit_function_nodes } from "../../../love/public/src/js_visit_function_nodes.mjs";
export function js_visit_function_nodes_list(ast, lambda$v) {
  function lambda(la) {}
  let list = list_adder(lambda);
  let r = js_visit_function_nodes(ast, lambda$v);
  let l = list_to(r);
  return l;
}
