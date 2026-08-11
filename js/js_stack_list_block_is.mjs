import { js_stack_list_owner_or_null } from "./js_stack_list_owner_or_null.mjs";
import { js_block_statement_is } from "./js_block_statement_is.mjs";
export function js_stack_list_block_is(stack, index_end) {
  let owner = js_stack_list_owner_or_null(stack, index_end);
  let block_is = js_block_statement_is(owner);
  return block_is;
}
