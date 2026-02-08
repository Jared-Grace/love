import { s } from "../../../love/public/src/s.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
import { app_shared_name_prefixed } from "../../../love/public/src/app_shared_name_prefixed.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_shared_name_main_get } from "../../../love/public/src/app_shared_name_main_get.mjs";
import { list_nearby } from "../../../love/public/src/list_nearby.mjs";
export async function functions_search_app_prefix(s) {
  let v2 = await app_shared_name_main_get(s);
  s = object_property_get(v2, "a_name");
  let a_name = app_shared_name_prefixed(s);
  let separator = function_name_separator();
  let results_search = await list_nearby(a_name + separator + "");
  let value = function_name_to_path(a_name);
  let results = object_merge(
    {
      [a_name]: value,
    },
    results_search,
  );
  return results;
}
