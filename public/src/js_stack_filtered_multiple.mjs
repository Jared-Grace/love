import { list_any } from "./list_any.mjs";
import { list_all } from "./list_all.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function js_stack_filtered_multiple(stack, types) {
  function lambda(n) {
    function lambda2(type) {
      let type_is = js_node_type_is(n, type);
      return type_is;
    }
    list_any(types, lambda2);
  }
  let filtered = list_filter(stack, lambda);
  return filtered;
}
