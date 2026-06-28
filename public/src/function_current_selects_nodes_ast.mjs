import { function_current_selects_nodes } from "../../../love/public/src/function_current_selects_nodes.mjs";
import { function_current_ast } from "../../../love/public/src/function_current_ast.mjs";
export async function function_current_selects_nodes_ast() {
  let ast = await function_current_ast();
  let selects = await function_current_selects_nodes(ast);
  return selects;
}
