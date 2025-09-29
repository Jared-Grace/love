import { string_pad } from "../../../love/public/src/string_pad.mjs";
import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { task_function_name_part } from "../../../love/public/src/task_function_name_part.mjs";
import { functions_search } from "../../../love/public/src/functions_search.mjs";
export async function tasks_run() {
  let result2 = task_function_name_part();
  let separator = function_name_separator();
  let search = string_pad(separator, result2);
  let result = await functions_search(search);
  let properties = object_properties(result);
  await each_async(properties, async function lambda(item) {
    let result3 = await function_run(item, []);
  });
  return result;
}
