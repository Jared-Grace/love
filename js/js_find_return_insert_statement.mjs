import { js_visit_above } from "./js_visit_above.mjs";
import { js_find_return } from "./js_find_return.mjs";
import { js_node_to_visitor } from "./js_node_to_visitor.mjs";
import { list_index_of_insert } from "./list_index_of_insert.mjs";
export function js_find_return_insert_statement(ast, statement) {
  "Putting a statement in front of the return needs the list the return sits in,";
  "which the tree can tell us from the node alone. Asking the tree here is what";
  "lets the selector answer with a plain node like every other selector does.";
  let node = js_find_return(ast);
  let v = js_node_to_visitor(ast, node);
  let e = js_visit_above(v);
  list_index_of_insert(e, node, statement);
}
