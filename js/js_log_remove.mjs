import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_get_end_2 } from "../../../love/public/src/list_get_end_2.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_log_remove(ast) {
  marker("1");
  function lambda(v) {
    let { stack, node } = v;
    let e1 = list_get_end_1(stack);
    let e2 = list_get_end_2(stack);
    function lambda3() {
      let { callee } = node;
      let { name } = callee;
      if (name === log.name) {
        list_remove(e2, e1);
      }
    }
    js_node_type_is_if(e1, "ExpressionStatement", lambda3);
  }
  js_visit_type(ast, "CallExpression", lambda);
}
