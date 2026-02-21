import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_block_statement_is(stack2) {
  let type_is = js_node_type_is(stack2, "BlockStatement");
  return type_is;
}
