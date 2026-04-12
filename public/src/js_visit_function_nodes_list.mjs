import { js_visit_function_nodes_curried } from "../../../love/public/src/js_visit_function_nodes_curried.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function js_visit_function_nodes_list(ast) {
  let lambda = js_visit_function_nodes_curried(ast);
  let list = list_adder(lambda);
  return list;
}
