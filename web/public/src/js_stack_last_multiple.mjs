import { js_stack_filtered } from "./js_stack_filtered.mjs";
import { list_last } from "./list_last.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_stack_last_multiple(stack, type) {
  let filtered = js_stack_filtered(stack, type);
  let last = list_last(filtered);
  return last;
}
