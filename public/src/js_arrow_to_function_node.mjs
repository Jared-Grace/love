import { js_node_type_set } from "../../../love/public/src/js_node_type_set.mjs";
export function js_arrow_to_function_node(node) {
  const type = "FunctionExpression";
  js_node_type_set(node, type);
}
