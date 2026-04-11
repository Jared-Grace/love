import { js_block_find } from "../../../love/public/src/js_block_find.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_node_to_visitor } from "../../../love/public/src/js_node_to_visitor.mjs";
export function js_node_to_block(ast, node) {
  let v = js_node_to_visitor(ast, node);
  let stack = property_get(v, "stack");
  let f = js_block_find(stack);
  return f;
}
