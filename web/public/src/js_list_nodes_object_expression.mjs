import { js_list_type_nodes } from "../../../love/public/src/js_list_type_nodes.mjs";
export function js_list_nodes_object_expression(ast) {
  const type = "ObjectExpression";
  let list = js_list_type_nodes(ast, type);
  return list;
}
