import { trinity_green } from "./trinity_green.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { log_keep } from "./log_keep.mjs";
import { log } from "./log.mjs";
import { function_run } from "./function_run.mjs";
import { json_to } from "./json_to.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
export async function function_run_log(f_name, args) {
  let { unaliased } = await function_name_unalias(f_name);
  log_keep("🏃 " + unaliased);
  let result = await function_run(f_name, args);
  log_keep("🔥");
  log_keep(result);
  return result;
}
