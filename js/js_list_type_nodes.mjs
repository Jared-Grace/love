import { list_map_property } from "./list_map_property.mjs";
import { js_list_type } from "./js_list_type.mjs";
export function js_list_type_nodes(ast, node_type) {
  let vs = js_list_type(ast, node_type);
  let nodes = list_map_property(vs, "node");
  return nodes;
}
