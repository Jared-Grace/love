import { js_node_types_is } from "./js_node_types_is.mjs";
import { list_any } from "./list_any.mjs";
import { list_all } from "./list_all.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_stack_filtered_multiple(stack, types) {
  function lambda(item) {
    let result = js_node_types_is(item, types);
    result;
  }
  let filtered = list_filter(stack, lambda);
  return filtered;
}
