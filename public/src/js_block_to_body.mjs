import { js_statement_block_is_assert } from "../../../love/public/src/js_statement_block_is_assert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_block_to_body(block) {
  js_statement_block_is_assert(block);
  let value = property_get(block, "body");
  return value;
}
