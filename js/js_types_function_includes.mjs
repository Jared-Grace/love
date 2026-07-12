import { list_includes } from "./list_includes.mjs";
import { js_types_function_node } from "./js_types_function_node.mjs";
export function js_types_function_includes(item) {
  let f_types = js_types_function_node();
  let includes = list_includes(f_types, item);
  return includes;
}
