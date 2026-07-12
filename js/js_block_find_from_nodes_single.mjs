import { js_block_find_from_node } from "./js_block_find_from_node.mjs";
import { list_single } from "./list_single.mjs";
export function js_block_find_from_nodes_single(ast, nodes) {
  let node = list_single(nodes);
  let f = js_block_find_from_node(ast, node);
  return f;
}
