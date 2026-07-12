import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_stack_filtered(stack, type) {
  function lambda(n) {
    let type_is = js_node_type_is(n, type);
    return type_is;
  }
  let filtered = list_filter(stack, lambda);
  return filtered;
}
