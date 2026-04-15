import { js_declare_init_set } from "../../../love/public/src/js_declare_init_set.mjs";
import { js_visit_declarators } from "../../../love/public/src/js_visit_declarators.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_node_type_not_is } from "../../../love/public/src/js_node_type_not_is.mjs";
import { list_get_end } from "../../../love/public/src/list_get_end.mjs";
export function js_declare_assign_init_set(ast, lambda) {
  function lambda2(v) {
    let stack = property_get(v, "stack");
    let node = property_get(v, "node");
    let init = property_get(node, "init");
    if (init === null) {
      let stack3 = list_get_end(stack, 3);
      let n = js_node_type_not_is(stack3, "ForOfStatement");
      if (n) {
        let value = lambda();
        js_declare_init_set(node, value);
      }
    }
  }
  js_visit_declarators(ast, lambda2);
}
