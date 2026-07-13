import { js_node_type_is_assert_json } from "./js_node_type_is_assert_json.mjs";
export function js_statement_block_is_assert(block) {
  js_node_type_is_assert_json(block, "BlockStatement", {
    hint: "expected a block-statement node here",
  });
}
