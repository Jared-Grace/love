import { list_single } from "./list_single.mjs";
import { js_list_type } from "./js_list_type.mjs";
export function js_type_find(ast, node_type) {
  let vs = js_list_type(ast, node_type);
  let only = list_single(vs);
  return only;
}
