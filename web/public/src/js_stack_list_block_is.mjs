import { not } from "./not.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_is } from "./list_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function js_stack_list_block_is(stack, index) {
  let stack1 = list_get_end(stack, index);
  let a = list_is(stack1);
  if (not(a)) {
    let v = false;
    return v;
  }
  let stack2 = list_get_end(stack, index + 1);
  let a2 = js_node_type_is(stack2, "BlockStatement");
  if (not(a2)) {
    let v2 = false;
    return v2;
  }
  let v3 = true;
  return v3;
}
