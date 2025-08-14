import { list_map_property } from "./list_map_property.mjs";
import { task_new } from "./task_new.mjs";
import { function_current_set } from "./function_current_set.mjs";
import { functions_combine } from "./functions_combine.mjs";
import { function_delete_if_exists } from "./function_delete_if_exists.mjs";
import { file_exists } from "./file_exists.mjs";
import { function_delete } from "./function_delete.mjs";
import { function_param_new } from "./function_param_new.mjs";
import { function_wrap } from "./function_wrap.mjs";
export async function sandbox() {
  const list = [function_current_set, task_new];
  let property_name = "name";
  let result = list_map_property(list, property_name);
  await functions_combine(list);
}
