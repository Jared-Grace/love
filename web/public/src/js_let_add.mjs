import { log } from "./log.mjs";
import { js_declare } from "./js_declare.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function js_let_add(ast) {
  js_visit_type(ast, "AssignmentExpression", function lambda(v) {
    let { stack } = v;
    let item = list_get_end_1(stack);
    let type_is = js_node_type_is(item, "ExpressionStatement");
    if (!type_is) {
      return;
    }
    let { node } = v;
    let { left, right } = node;
    log(node);
    return;$g$left$name
    let assign = js_declare( right);
  });
  return;
  a = 1;
}
