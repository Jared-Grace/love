import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
export function js_block_statement_is(stack_) {
  let type_is = js_node_type_is(stack_, "BlockStatement");
  return type_is;
}
