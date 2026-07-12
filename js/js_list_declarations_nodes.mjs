import { list_map_property } from "./list_map_property.mjs";
import { js_list_declarations_visitors } from "./js_list_declarations_visitors.mjs";
export function js_list_declarations_nodes(ast, lambda$v) {
  let vs = js_list_declarations_visitors(ast, lambda$v);
  let list = list_map_property(vs, "node");
  return list;
}
