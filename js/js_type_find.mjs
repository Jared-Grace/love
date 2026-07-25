import { list_single } from "./list_single.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { property_get } from "./property_get.mjs";
export function js_type_find(ast, node_type) {
  "A selector hands back the node itself, the same as every other selector, so a";
  "transform can take what any of them returns without asking which one found it.";
  let vs = js_list_type(ast, node_type);
  let only = list_single(vs);
  let node = property_get(only, "node");
  return node;
}
