import { function_run_unalias_log_before } from "./function_run_unalias_log_before.mjs";
import { property_get } from "./property_get.mjs";
import { log_keep } from "./log_keep.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
export async function function_run_log(f_name, args) {
  let v = await function_name_unalias(f_name);
  let unaliased = property_get(v, "unaliased");
  let result = await function_run_unalias_log_before(unaliased, args);
  log_keep(function_run_log.name, "🔥");
  log_keep(function_run_log.name, result);
  return result;
}
