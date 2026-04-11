import { js_visit_function_nodes_list } from "../../../love/public/src/js_visit_function_nodes_list.mjs";
export function js_curry_replace(ast) {
  function lambda(v) {}
  let l = js_visit_function_nodes_list(ast, lambda);
}
