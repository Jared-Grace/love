import { property_path_get_2 } from "./property_path_get_2.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
export function js_visit_calls_named_nodes(ast, f_name, lambda) {
  function lambda2(a) {
    let node = property_path_get_2(a, "v", "node");
    lambda(node);
  }
  js_visit_calls_named(ast, f_name, lambda2);
}
