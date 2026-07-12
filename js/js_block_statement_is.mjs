import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_block_statement_is(stack_2) {
  let type_is = js_node_type_is(stack_2, "BlockStatement");
  return type_is;
}
