import { list_adder_invoke } from "../../../love/public/src/list_adder_invoke.mjs";
import { js_call_callee_name_try } from "../../../love/public/src/js_call_callee_name_try.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_get_end_ } from "../../../love/public/src/list_get_end_2.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_statement_call_remove(ast, fn) {
  function lambda(la) {
    function lambda_visit(v) {
      let node = property_get(v, "node");
      let stack = property_get(v, "stack");
      let e = list_get_end_1(stack);
      let e2 = list_get_end_(stack);
      function lambda3() {
        let name = js_call_callee_name_try(node);
        if (name === fn.name) {
          function lambda_remove() {
            list_remove(e2, e);
          }
          la(lambda_remove);
        }
      }
      js_node_type_is_if(e, "ExpressionStatement", lambda3);
    }
    js_visit_type(ast, "CallExpression", lambda_visit);
  }
  list_adder_invoke(lambda);
}
