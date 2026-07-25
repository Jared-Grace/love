import { function_name_full_assert } from "./function_name_full_assert.mjs";
import { ai_log_add_try } from "./ai_log_add_try.mjs";
import { function_run } from "./function_run.mjs";
export async function function_run_from_process_argv_full_name() {
  "runs the function named on the command line, refusing shorthand — it must be named in full";
  let [, , f_name, ...args] = process.argv;
  await function_name_full_assert(f_name);
  await ai_log_add_try(f_name, args);
  let result = await function_run(f_name, args);
  return result;
}
