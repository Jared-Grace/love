import { function_run_unalias_log_before } from "../../../love/public/src/function_run_unalias_log_before.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
export async function function_run_log(f_name, args) {
  let v = await function_name_unalias(f_name);
  let unaliased = property_get(v, "unaliased");
  let result = await function_run_unalias_log_before(unaliased, args);
  log_keep("🔥");
  log_keep(result);
  return result;
}
