import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { function_run_unalias } from "../../../love/public/src/function_run_unalias.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { json_to } from "./json_to.mjs";
export async function function_run_log(f_name, args) {
  let { unaliased } = await function_name_unalias(f_name);
  log_keep("🏃 " + unaliased + " " + json_to(args));
  let result = await function_run_unalias(f_name, args);
  log_keep("🔥");
  log_keep(result);
  return result;
}
