import { js_visit_type } from "./js_visit_type.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function js_declare_assign(ast, lambda) {
  function lambda2(v) {
    let { node, stack } = v;
    let { init } = node;
    if (init === null) {
      let stack3 = list_get_end(stack, 3);
      let n = js_node_type_not_is(stack3, "ForOfStatement");
      if (n) {
        let value = lambda();
        object_property_set(node, "init", value);
      }
    }
  }
  js_visit_type(ast, "VariableDeclarator", lambda2);
}
