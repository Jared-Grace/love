import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_is } from "./list_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function js_stack_list_block_is(stack, index) {
  let stack1 = list_get_end(stack, index);
  if (!list_is(stack1)) {
    return false;
  }
  let stack2 = list_get_end(stack, index + 1);
  if (!js_node_type_is(stack2, "BlockStatement")) {
    return false;
  }
  return true;
}
