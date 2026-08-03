import { add } from "./add.mjs";
import { js_block_statement_is } from "./js_block_statement_is.mjs";
import { not } from "./not.mjs";
import { list_is } from "./list_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function js_stack_list_block_is(stack, index_end) {
  let stack_ = list_get_end(stack, index_end);
  let a = list_is(stack_);
  if (not(a)) {
    return false;
  }
  let index_from_end = add(index_end, 1);
  let stack_2 = list_get_end(stack, index_from_end);
  let a2 = js_block_statement_is(stack_2);
  if (not(a2)) {
    return false;
  }
  return true;
}
