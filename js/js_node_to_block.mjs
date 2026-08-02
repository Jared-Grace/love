import { js_node_to_visitor_stack } from "./js_node_to_visitor_stack.mjs";
import { js_block_find } from "./js_block_find.mjs";
export function js_node_to_block(ast, node) {
  let stack = js_node_to_visitor_stack(ast, node);
  let f = js_block_find(stack);
  return f;
}
