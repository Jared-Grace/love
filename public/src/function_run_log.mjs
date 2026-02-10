import { emoji_run } from "../../../love/public/src/emoji_run.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { function_run_unalias } from "../../../love/public/src/function_run_unalias.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { json_to } from "./json_to.mjs";
export async function function_run_log(f_name, args) {
  let v = await function_name_unalias(f_name);
  let unaliased = property_get(v, "unaliased");
  log_keep(emoji_run() + " " + unaliased + " " + json_to(args));
  let result = await function_run_unalias(f_name, args);
  log_keep("🔥");
  log_keep(result);
  return result;
}
