import { task_new } from "./task_new.mjs";
import { function_current_set } from "./function_current_set.mjs";
export async function function_current_set_task_new(f_name) {
  await function_current_set(f_name);
  await task_new();
}
