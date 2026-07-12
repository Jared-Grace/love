import { property_get } from "./property_get.mjs";
import { js_function_node_find_named } from "./js_function_node_find_named.mjs";
export function js_function_node_find_named_node(ast, name) {
  let only = js_function_node_find_named(ast, name);
  let node = property_get(only, "node");
  return node;
}
