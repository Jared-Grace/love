import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_visit_function_nodes_list } from "../../../love/public/src/js_visit_function_nodes_list.mjs";
export function js_curry_replace(ast) {
  function lambda(v) {
    let node = property_get(v, "node");
  }
  let l = js_visit_function_nodes_list(ast, lambda);
}
