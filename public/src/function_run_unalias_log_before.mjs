import { function_run_unalias } from "../../../love/public/src/function_run_unalias.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { emoji_run } from "../../../love/public/src/emoji_run.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
export async function function_run_unalias_log_before(unaliased, args) {
  log_keep(emoji_run() + " " + unaliased + " " + json_to(args));
  let result = await function_run_unalias(unaliased, args);
  return result;
}
