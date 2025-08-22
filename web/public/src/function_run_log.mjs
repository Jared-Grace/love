import { log_keep } from "./log_keep.mjs";
import { function_run } from "./function_run.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
export async function function_run_log(f_name, args) {
  let { unaliased } = await function_name_unalias(f_name);
  log_keep("🏃 " + unaliased);
  let result = await function_run(f_name, args);
  log_keep("🔥");
  log_keep(result);
  return result;
}
