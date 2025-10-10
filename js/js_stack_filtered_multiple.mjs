import { js_node_types_is } from "../../../love/public/src/js_node_types_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function js_stack_filtered_multiple(stack, types) {
  function lambda(item) {
    let result = js_node_types_is(item, types);
    return result;
  }
  let filtered = list_filter(stack, lambda);
  return filtered;
}
