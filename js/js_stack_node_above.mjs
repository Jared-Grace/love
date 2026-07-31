import { list_size_less_1 } from "./list_size_less_1.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_first } from "./list_first.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { js_node_is } from "./js_node_is.mjs";
export function js_stack_node_above(stack) {
  arguments_assert(arguments, 1);
  ("The nearest real node above the one being visited. Not simply the entry before");
  ("it: the walk goes through the lists a node keeps its children in, so the thing");
  ("directly above a call's argument is the list of arguments rather than the");
  ("call, and anything asking that entry for its kind gets a list instead.");
  let last = list_size_less_1(stack);
  let earlier = list_slice(stack, 0, last);
  list_reverse(earlier);
  let nodes = list_filter(earlier, js_node_is);
  let above = list_first(nodes);
  return above;
}
