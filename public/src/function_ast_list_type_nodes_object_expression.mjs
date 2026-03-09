import { function_ast_list_type_nodes } from "../../../love/public/src/function_ast_list_type_nodes.mjs";
export async function function_ast_list_type_nodes_object_expression(f_name) {
  const type = "ObjectExpression";
  let list = await function_ast_list_type_nodes(f_name, type);
  return list;
}
