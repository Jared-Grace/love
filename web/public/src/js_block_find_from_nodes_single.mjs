import { js_block_find_from_node } from "../../../love/public/src/js_block_find_from_node.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export function js_block_find_from_nodes_single(ast, nodes) {
  let node = list_single(nodes);
  let r = js_block_find_from_node(ast, node);
  return r;
}
