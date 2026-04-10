import { js_node_to_block } from "../../../love/public/src/js_node_to_block.mjs";
export function js_node_to_block_curried(ast) {
  return function js_node_to_block_curried_result(node) {
    return js_node_to_block(ast, node);
  };
}
