import { function_new } from "./function_new.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
export async function task_new(task_name) {
  let f_name = await data_function_current_get();
  let f_name_task = function_name_combine(f_name, task_name);
  await function_new(f_name_task);
}
