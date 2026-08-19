import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { list_slice_from } from "./list_slice_from.mjs";
import { js_types_function_node } from "./js_types_function_node.mjs";
import { js_stack_filtered_multiple } from "./js_stack_filtered_multiple.mjs";
export function js_stack_function_below_is(stack, item) {
  arguments_assert(arguments, 2);
  ("Whether a function is written between the given statement and the name at the end of the walk - that is, whether the name stands inside a function written in that statement rather than in the statement's own run of work.");
  ("It settles when a name declared further down a block is nevertheless standing where a name is read. A run of work reads only the names above it, because it is read as it is reached. A function written there is read later, so by the time it is read the whole block around it has been, and every name that block declares is standing.");
  let last = list_get_end_1(stack);
  let below = list_slice_from(stack, item, last);
  let types = js_types_function_node();
  let functions = js_stack_filtered_multiple(below, types);
  let below_is = list_empty_not_is(functions);
  return below_is;
}
