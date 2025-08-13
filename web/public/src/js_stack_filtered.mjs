import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_stack_filtered(stack, type) {
  let filtered = list_filter(stack, (n) => js_node_type_is(n, type));
  return filtered;
}
