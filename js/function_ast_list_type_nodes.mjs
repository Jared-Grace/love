import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { function_ast } from "./function_ast.mjs";
export async function function_ast_list_type_nodes(f_name, type) {
  let ast = await function_ast(f_name);
  let list = js_list_type_nodes(ast, type);
  return list;
}
