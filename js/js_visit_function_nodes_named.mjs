import { log } from "./log.mjs";
import { js_identifier_is_if } from "./js_identifier_is_if.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { js_visit_function_nodes } from "./js_visit_function_nodes.mjs";
export function js_visit_function_nodes_named(ast, lambda$v, name) {
  function lambda(v) {
    let node = property_get(v, "node");
    let id = property_get(node, "id");
    log(js_visit_function_nodes_named.name, {
      id,
    });
    function lambda3() {
      let actual = property_get(id, "name");
      let eq = equal(actual, name);
      if (eq) {
        lambda$v(v);
      }
    }
    js_identifier_is_if(id, lambda3);
  }
  let r = js_visit_function_nodes(ast, lambda);
  return r;
}
