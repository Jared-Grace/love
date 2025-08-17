import { marker } from "./marker.mjs";
import { functions_combine_test } from "./functions_combine_test.mjs";
import { functions_combine_name } from "./functions_combine_name.mjs";
import { list_map_name } from "./list_map_name.mjs";
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
  marker("1");
  const list = [function_current_set, task_new];
  await functions_combine_test(list);
}
