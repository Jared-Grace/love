import { js_node_type_is_assert } from "../../../love/public/src/js_node_type_is_assert.mjs";
export function js_statement_block_is_assert(block) {
  js_node_type_is_assert(block, "BlockStatement");
}
