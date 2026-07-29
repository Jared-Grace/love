import { fn_name } from "./fn_name.mjs";
import { log_keep } from "./log_keep.mjs";
import { function_current_selects_nodes } from "./function_current_selects_nodes.mjs";
export async function function_current_selects_nodes_log() {
  let selects = await function_current_selects_nodes();
  log_keep(fn_name("sandbox"), {
    selects,
  });
}
