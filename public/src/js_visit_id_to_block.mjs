import { js_block_find_from_node } from "../../../love/public/src/js_block_find_from_node.mjs";
import { js_visit_id_to_node_single } from "../../../love/public/src/js_visit_id_to_node_single.mjs";
export function js_visit_id_to_block(ast, selects) {
  let node = js_visit_id_to_node_single(ast, selects);
  let r = js_block_find_from_node(ast, node);
  return r;
}
