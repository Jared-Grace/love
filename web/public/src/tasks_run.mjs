import { text_pad } from "../../../love/public/src/text_pad.mjs";
import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
import { function_run_unalias } from "../../../love/public/src/function_run_unalias.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { task_function_name_part } from "../../../love/public/src/task_function_name_part.mjs";
import { list_nearby } from "../../../love/public/src/list_nearby.mjs";
export async function tasks_run() {
  let result2 = task_function_name_part();
  let separator = function_name_separator();
  let search = text_pad(result2, separator);
  let result = await list_nearby(search);
  let properties = object_properties(result);
  async function lambda(item) {
    let result3 = await function_run_unalias(item, []);
  }
  await each_async(properties, lambda);
  return result;
}
