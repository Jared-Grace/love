import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
export function js_return_above_combine(ast) {
  function lambda(v) {}
  js_visit_type(ast, "ReturnStatement", lambda);
}
