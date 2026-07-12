import { list_map_property } from "./list_map_property.mjs";
import { js_list_function_nodes_visitors } from "./js_list_function_nodes_visitors.mjs";
export function js_list_function_nodes(ast) {
  let list = js_list_function_nodes_visitors(ast);
  let mapped = list_map_property(list, "node");
  return mapped;
}
