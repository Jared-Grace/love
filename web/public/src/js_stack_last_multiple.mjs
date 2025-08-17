import { list_last_or_null } from "./list_last_or_null.mjs";
import { js_stack_filtered_multiple } from "./js_stack_filtered_multiple.mjs";
import { js_stack_filtered } from "./js_stack_filtered.mjs";
import { list_last } from "./list_last.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_stack_last_multiple(stack, types) {
  let filtered = js_stack_filtered_multiple(stack, types);
  let last = list_last_or_null(filtered);
  return last;
}
