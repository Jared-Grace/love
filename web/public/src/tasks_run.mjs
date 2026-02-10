import { text_pad } from "../../../love/public/src/text_pad.mjs";
import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
import { function_run_unalias } from "../../../love/public/src/function_run_unalias.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { task_function_name_part } from "../../../love/public/src/task_function_name_part.mjs";
import { functions_search } from "../../../love/public/src/functions_search.mjs";
export async function tasks_run() {
  let result2 = task_function_name_part();
  let separator = function_name_separator();
  let search = text_pad(result2, separator);
  let result = await functions_search(search);
  let properties = properties_get(result);
  async function lambda(item) {
    let result3 = await function_run_unalias(item, []);
  }
  await each_async(properties, lambda);
  return result;
}
