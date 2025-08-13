import { js_visit_type } from "./js_visit_type.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function js_let_add(ast) {
  return;
  a = 1;
  js_visit_type(ast, "AssignmentExpression", function lambda(v) {
    let { stack } = v;
    let item = list_get_end(stack2, index_from_end);
  });
}
