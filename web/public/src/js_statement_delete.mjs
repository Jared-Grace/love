import { js_node_to_visitor } from "../../../love/public/src/js_node_to_visitor.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function js_statement_delete(ast, nodes) {
  let first = list_first(nodes);
  let v = js_node_to_visitor(ast, node_search);
}
