import { data_function_current_get } from "./data_function_current_get.mjs";
export async function task_new() {
  let f_name = await data_function_current_get();
}
