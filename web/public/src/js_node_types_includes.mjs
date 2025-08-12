import { list_includes } from "./list_includes.mjs";
import { js_node_types } from "./js_node_types.mjs";
export function js_node_types_includes(ast, node_type) {
  return list_includes(js_node_types(ast), node_type);
}
