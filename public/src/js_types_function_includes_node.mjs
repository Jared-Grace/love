import { js_types_function_includes } from "../../../love/public/src/js_types_function_includes.mjs";
import { js_node_type } from "../../../love/public/src/js_node_type.mjs";
export function js_types_function_includes_node(next) {
  let nt = js_node_type(next);
  const i = js_types_function_includes(nt);
  return i;
}
