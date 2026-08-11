import { add } from "./add.mjs";
import { not } from "./not.mjs";
import { list_is } from "./list_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
export function js_stack_list_owner_or_null(stack, index_end) {
  "The node that owns the list standing this far up the stack, or nothing at all when what stands there is not a list. Asking what a list belongs to is two questions in a fixed order - is this a list, and what is one step further up - and two readers both asked them before they could ask their own, so the pair had no name of its own.";
  let listed = list_get_end(stack, index_end);
  let listed_is = list_is(listed);
  if (not(listed_is)) {
    return null;
  }
  let index_from_end = add(index_end, 1);
  let owner = list_get_end(stack, index_from_end);
  return owner;
}
