import { task_new } from "./task_new.mjs";
import { function_current_set } from "./function_current_set.mjs";
import { functions_combine } from "./functions_combine.mjs";
import { function_delete_if_exists } from "./function_delete_if_exists.mjs";
import { file_exists } from "./file_exists.mjs";
import { function_delete } from "./function_delete.mjs";
import { function_param_new } from "./function_param_new.mjs";
import { function_wrap } from "./function_wrap.mjs";
export async function sandbox() {
  const n = "function_params_new";
  await function_delete_if_exists(n);
  await function_wrap(function_param_new.name, n);
  await functions_combine(f_names);
  await function_current_set(f_name);
  await task_new(task_name);
}
