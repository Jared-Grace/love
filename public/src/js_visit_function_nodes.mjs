import { js_types_function_node } from "../../../love/public/src/js_types_function_node.mjs";
import { js_visit_types } from "../../../love/public/src/js_visit_types.mjs";
export function js_visit_function_nodes(ast, lambda$v) {
  let types_function = js_types_function_node();
  let r = js_visit_types(ast, types_function, lambda$v);
  return r;
}
