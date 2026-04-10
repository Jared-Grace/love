import { js_node_to_block } from "../../../love/public/src/js_node_to_block.mjs";
export function js_node_to_block_curried(ast) {
  let r = function js_node_to_block_curried_result(node) {
    let f = js_node_to_block(ast, node);
    return f;
  };
  return r;
}
