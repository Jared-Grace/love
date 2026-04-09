import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_block_find } from "../../../love/public/src/js_block_find.mjs";
import { js_node_to_visitor } from "../../../love/public/src/js_node_to_visitor.mjs";
import { js_visit_id_to_node } from "../../../love/public/src/js_visit_id_to_node.mjs";
export function js_statement_duplicate(id) {
  let node = js_visit_id_to_node(ast, id);
  let v = js_node_to_visitor(ast, node);
  let stack2 = property_get(v, "stack");
  let f = js_block_find(stack);
}
