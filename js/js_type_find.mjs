import { list_single_property } from "./list_single_property.mjs";
import { js_list_type } from "./js_list_type.mjs";
export function js_type_find(ast, node_type) {
  "A selector hands back the node itself, the same as every other selector, so a";
  "transform can take what any of them returns without asking which one found it.";
  let vs = js_list_type(ast, node_type);
  let node = list_single_property(vs, "node");
  return node;
}
