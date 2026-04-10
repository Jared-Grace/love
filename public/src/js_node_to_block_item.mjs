import { js_node_to_block } from "../../../love/public/src/js_node_to_block.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_node_to_block_item(ast, node) {
  let f = js_node_to_block(ast, node);
  let item = property_get(f, "item");
  return item;
}
