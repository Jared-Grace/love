import { list_any } from "./list_any.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_node_types_is(item, types) {
  function lambda2(type) {
    let type_is = js_node_type_is(item, type);
    return type_is;
  }
  const match = list_any(types, lambda2);
  return match;
}
