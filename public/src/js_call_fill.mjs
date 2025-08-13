import { js_visit } from "./js_visit.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_call_fill(ast) {
  js_visit_type(ast, "ExpressionStatement", (v) => {});
}
