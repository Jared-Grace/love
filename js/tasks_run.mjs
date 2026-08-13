import { text_pad } from "./text_pad.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
import { function_run_unalias } from "./function_run_unalias.mjs";
import { each_async } from "./each_async.mjs";
import { properties_get } from "./properties_get.mjs";
import { task_function_name_part } from "./task_function_name_part.mjs";
import { functions_search_all } from "./functions_search_all.mjs";
export async function tasks_run() {
  let result2 = task_function_name_part();
  let separator = function_name_separator();
  let search = text_pad(result2, separator);
  let result = await functions_search_all(search);
  let properties = properties_get(result);
  async function lambda(item) {
    await function_run_unalias(item, []);
  }
  await each_async(properties, lambda);
  return result;
}
