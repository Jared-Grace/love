import { js_declarator_init_set } from "./js_declarator_init_set.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { js_visit_declarators } from "./js_visit_declarators.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function js_declare_assign_init_set(ast, lambda) {
  function lambda2(v) {
    let stack = property_get(v, "stack");
    let node = property_get(v, "node");
    let init = js_declare_init_get(node);
    if (init === null) {
      let stack_3 = list_get_end(stack, 3);
      let n = js_node_type_not_is(stack_3, "ForOfStatement");
      if (n) {
        let value = lambda();
        js_declarator_init_set(node, value);
      }
    }
  }
  js_visit_declarators(ast, lambda2);
}
