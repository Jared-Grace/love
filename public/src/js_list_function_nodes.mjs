import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { js_list_function_nodes_visitors } from "../../../love/public/src/js_list_function_nodes_visitors.mjs";
export function js_list_function_nodes(ast) {
  let list = js_list_function_nodes_visitors(ast);
  let mapped = list_map_property(list, "node");
  return mapped;
}
