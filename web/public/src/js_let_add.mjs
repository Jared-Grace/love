import { js_visit_type } from "./js_visit_type.mjs";
export function js_let_add(ast) {
  return;
  a = 1;
  js_visit_type(ast, "AssignmentExpression", function lambda(v) {
    let { stack } = v;
  });
}
