import { js_call_callee_name } from "../../../love/public/src/js_call_callee_name.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_get_end_2 } from "../../../love/public/src/list_get_end_2.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_statement_call_remove(ast, fn) {
  function lambda(v) {
    let node = property_get(v, "node");
    let stack = property_get(v, "stack");
    let e1 = list_get_end_1(stack);
    let e2 = list_get_end_2(stack);
    function lambda3() {
      let name = js_call_callee_name(node);
      if (name === fn.name) {
        list_remove(e2, e1);
      }
    }
    js_node_type_is_if(e1, "ExpressionStatement", lambda3);
  }
  js_visit_type(ast, "CallExpression", lambda);
}
