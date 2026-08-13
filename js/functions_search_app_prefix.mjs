import { function_name_separator_trail } from "./function_name_separator_trail.mjs";
import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { property_get } from "./property_get.mjs";
import { functions_search_all } from "./functions_search_all.mjs";
export async function functions_search_app_prefix(s) {
  let v = await app_shared_name_search_info(s);
  s = property_get(v, "a_name");
  let a_name = app_shared_name_prefixed(s);
  let c = function_name_separator_trail(a_name);
  let results_search = await functions_search_all(c);
  let value = function_name_to_path_relative(a_name);
  let results = object_merge_set(
    {
      [a_name]: value,
    },
    results_search,
  );
  return results;
}
