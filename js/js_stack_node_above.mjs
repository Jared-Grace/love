import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_find } from "./list_find.mjs";
import { js_node_is } from "./js_node_is.mjs";
export function js_stack_node_above(stack) {
  arguments_assert(arguments, 1);
  ("The nearest real node above the one being visited. Not simply the entry before");
  ("it: the walk goes through the lists a node keeps its children in, so the thing");
  ("directly above a call's argument is the list of arguments rather than the");
  ("call, and anything asking that entry for its kind gets a list instead.");
  let size = list_size(stack);
  let last = subtract(size, 1);
  let earlier = list_slice(stack, 0, last);
  list_reverse(earlier);
  let above = list_find(earlier, js_node_is);
  return above;
}
