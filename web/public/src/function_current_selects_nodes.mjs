import { js_visit_id_to_node_or_id_multiple } from "../../../love/public/src/js_visit_id_to_node_or_id_multiple.mjs";
import { function_current_selects } from "../../../love/public/src/function_current_selects.mjs";
export async function function_current_selects_nodes() {
  let selects = await function_current_selects();
  selects = js_visit_id_to_node_or_id_multiple(selects, ast);
  return selects;
}
