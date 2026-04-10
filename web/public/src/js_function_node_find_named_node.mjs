import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_function_node_find_named } from "../../../love/public/src/js_function_node_find_named.mjs";
export function js_function_node_find_named_node(ast, name) {
  let only = js_function_node_find_named(ast, name);
  let node = property_get(only, "node");
  return node;
}
