import { function_name_to_path } from "./function_name_to_path.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
export async function functions_search(search) {
  terms = string_split(s, ",");
  let f_names = functions_names();
  let f_names_search = list_filter(f_names, (n) => string_includes(n, search));
  let result = {};
  each(f_names_search, (n) => {
    object_property_set(result, n, function_name_to_path(n));
  });
  return result;
}
