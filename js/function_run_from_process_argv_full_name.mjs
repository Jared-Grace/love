import { function_name_full_assert } from "./function_name_full_assert.mjs";
import { function_run } from "./function_run.mjs";
export async function function_run_from_process_argv_full_name() {
  "like function_run_from_process_argv, but refuses shorthand — the function must be named in full";
  const [, , f_name, ...args] = process.argv;
  await function_name_full_assert(f_name);
  let result = await function_run(f_name, args);
  return result;
}
