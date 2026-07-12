import { function_current_set_task_new } from "./function_current_set_task_new.mjs";
export async function function_current_set_task_new_simple(f_name) {
  let v = await function_current_set_task_new(f_name, "simple");
  return v;
}
