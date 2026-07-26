import { function_import_unalias } from "./function_import_unalias.mjs";
import { function_args_count_assert } from "./function_args_count_assert.mjs";
export async function function_run(f_name, args) {
  let fn = await function_import_unalias(f_name);
  function_args_count_assert(fn, args);
  let result = await fn(...args);
  return result;
}
