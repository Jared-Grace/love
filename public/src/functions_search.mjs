import { search_generic } from "./search_generic.mjs";
import { list_all } from "./list_all.mjs";
import { string_split } from "./string_split.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each } from "./each.mjs";
import { string_includes } from "./string_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
export async function functions_search(search) {
  let f_names = functions_names();
  let result = search_generic(search, f_names, function_name_to_path);
  return result;
}
