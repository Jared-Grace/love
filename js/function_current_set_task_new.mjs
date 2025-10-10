import { task_new } from "../../../love/public/src/task_new.mjs";
import { function_current_set } from "../../../love/public/src/function_current_set.mjs";
export async function function_current_set_task_new(f_name, task_name) {
  await function_current_set(f_name);
  await task_new(task_name);
}
