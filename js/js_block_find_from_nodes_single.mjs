import { js_node_to_block } from "./js_node_to_block.mjs";
import { list_single } from "./list_single.mjs";
export function js_block_find_from_nodes_single(ast, nodes) {
  let node = list_single(nodes);
  let f = js_node_to_block(ast, node);
  return f;
}
