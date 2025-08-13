import { function_run } from "./function_run.mjs";
import { each_async } from "./each_async.mjs";
import { object_properties } from "./object_properties.mjs";
import { task_function_name_part } from "./task_function_name_part.mjs";
import { functions_search } from "./functions_search.mjs";
export async function tasks_run() {
  let result2 = task_function_name_part();
  let result = await functions_search(result2);
  let properties = object_properties(result);
  await each_async(properties, async function lambda(item) {
    let result3 = await function_run(funcName, args);
  });
  return result;
}
