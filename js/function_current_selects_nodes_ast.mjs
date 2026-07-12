import { js_visit_id_to_node_or_id_multiple } from "./js_visit_id_to_node_or_id_multiple.mjs";
import { function_current_selects } from "./function_current_selects.mjs";
export async function function_current_selects_nodes_ast(ast) {
  let selects = await function_current_selects();
  selects = js_visit_id_to_node_or_id_multiple(selects, ast);
  return selects;
}
