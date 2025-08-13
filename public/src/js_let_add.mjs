import { js_declare } from "./js_declare.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function js_let_add(ast) {
  return;
  a = 1;
  js_visit_type(ast, "AssignmentExpression", function lambda(v) {
    let { stack } = v;
    let item = list_get_end_1(stack);
    let type_is = js_node_type_is(node, "ExpressionStatement");
    if (!type_is) {
      return;
    }
    let assign = js_declare(name, init);
  });
}
