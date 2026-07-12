import { list_adder_invoke } from "./list_adder_invoke.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_get_end_2 } from "./list_get_end_2.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { property_get } from "./property_get.mjs";
export function js_statement_call_remove(ast, fn) {
  function lambda(la) {
    function lambda_visit(v) {
      let node = property_get(v, "node");
      let stack = property_get(v, "stack");
      let e1 = list_get_end_1(stack);
      let e2 = list_get_end_2(stack);
      function lambda3() {
        let name = js_call_callee_name_try(node);
        if (name === fn.name) {
          function lambda_remove() {
            list_remove(e2, e1);
          }
          la(lambda_remove);
        }
      }
      js_node_type_is_if(e1, "ExpressionStatement", lambda3);
    }
    js_visit_type(ast, "CallExpression", lambda_visit);
  }
  list_adder_invoke(lambda);
}
