import { sandbox } from "../../../love/public/src/sandbox.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { function_current_selects_nodes } from "../../../love/public/src/function_current_selects_nodes.mjs";
export async function function_current_selects_nodes_log() {
  let selects = await function_current_selects_nodes();
  log_keep(sandbox.name, {
    selects,
  });
}
