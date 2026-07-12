import { js_node_type_set } from "./js_node_type_set.mjs";
export function js_arrow_to_function_node(node) {
  let type = "FunctionExpression";
  js_node_type_set(node, type);
}
