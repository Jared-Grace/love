import { js_const_to_let_node } from "../../../love/public/src/js_const_to_let_node.mjs";
import { js_visit_declarations_nodes } from "../../../love/public/src/js_visit_declarations_nodes.mjs";
export function js_const_to_let(ast) {
  js_visit_declarations_nodes(ast, js_const_to_let_node);
  return;
}
