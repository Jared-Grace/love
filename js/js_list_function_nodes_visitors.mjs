import { js_visit_function_nodes_curried } from "./js_visit_function_nodes_curried.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_list_function_nodes_visitors(ast) {
  let lambda = js_visit_function_nodes_curried(ast);
  let list = list_adder(lambda);
  return list;
}
