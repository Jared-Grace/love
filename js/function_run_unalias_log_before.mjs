import { function_run_unalias } from "./function_run_unalias.mjs";
import { json_to } from "./json_to.mjs";
import { emoji_run } from "./emoji_run.mjs";
import { log_keep } from "./log_keep.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function function_run_unalias_log_before(unaliased, args) {
  log_keep(
    function_run_unalias_log_before.name,
    text_combine_multiple([emoji_run(), " ", unaliased, " ", json_to(args)]),
  );
  let result = await function_run_unalias(unaliased, args);
  return result;
}
