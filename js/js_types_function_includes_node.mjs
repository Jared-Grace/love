import { js_types_function_includes } from "./js_types_function_includes.mjs";
import { js_node_type } from "./js_node_type.mjs";
export function js_types_function_includes_node(node) {
  let nt = js_node_type(node);
  let i = js_types_function_includes(nt);
  return i;
}
