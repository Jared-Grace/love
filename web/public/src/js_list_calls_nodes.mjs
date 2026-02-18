import { js_list_type_nodes } from "../../../love/public/src/js_list_type_nodes.mjs";
export function js_list_calls_nodes(ast) {
  const node_type = "CallExpression";
  let mapped = js_list_type_nodes(ast, node_type);
  return mapped;
}
