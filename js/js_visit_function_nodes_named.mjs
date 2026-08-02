import { property_path_get_2 } from "./property_path_get_2.mjs";
import { property_equals } from "./property_equals.mjs";
import { js_identifier_is_if } from "./js_identifier_is_if.mjs";
import { js_visit_function_nodes } from "./js_visit_function_nodes.mjs";
export function js_visit_function_nodes_named(ast, lambda$v, name) {
  function lambda(v) {
    let id = property_path_get_2(v, "node", "id");
    function lambda3() {
      let eq = property_equals(id, "name", name);
      if (eq) {
        lambda$v(v);
      }
    }
    js_identifier_is_if(id, lambda3);
  }
  let r = js_visit_function_nodes(ast, lambda);
  return r;
}
