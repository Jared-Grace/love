import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_declare_assign_null(ast) {
  let a;
  js_visit_type(ast, "VariableDeclarator", function lambda(v) {
    let { node } = v;
    let { init } = node;
    if (false) {
    }
    log(node);
  });
  return;
}
