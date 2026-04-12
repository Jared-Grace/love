import { js_visit_function_nodes } from "../../../love/public/src/js_visit_function_nodes.mjs";
export function js_visit_function_nodes_curried(ast) {
  let r2 = function js_visit_function_nodes_curried_result(lambda$v) {
    let r = js_visit_function_nodes(ast, lambda$v);
    return r;
  };
  return r2;
}
