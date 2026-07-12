import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
export function js_list_calls_nodes(ast) {
  let node_type = "CallExpression";
  let nodes = js_list_type_nodes(ast, node_type);
  return nodes;
}
