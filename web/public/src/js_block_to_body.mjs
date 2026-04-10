import { js_node_type_is_assert } from "../../../love/public/src/js_node_type_is_assert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_block_to_body(block) {
  js_node_type_is_assert(block, "BlockStatement");
  let value = property_get(block, "body");
  return value;
}
