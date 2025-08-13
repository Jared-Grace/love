import { task_new } from "./task_new.mjs";
export async function task_new_simple(task_name) {
  return await task_new(task_name);
}
