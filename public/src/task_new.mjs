import { function_name_combine } from "./function_name_combine.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
export async function task_new() {
  let f_name = await data_function_current_get();
  function_name_combine();
}
