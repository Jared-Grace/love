import { list_includes } from "./list_includes.mjs";
import { js_node_types } from "./js_node_types.mjs";
export function js_node_types_includes(ast, node_type) {
  let list = js_node_types(ast);
  let includes = list_includes(list, node_type);
  return includes;
}
