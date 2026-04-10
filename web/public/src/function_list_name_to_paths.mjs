import { property_get_curried } from "../../../love/public/src/property_get_curried.mjs";
import { functions_names_to_paths } from "../../../love/public/src/functions_names_to_paths.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
export async function function_list_name_to_paths(list_names) {
  let r = await functions_names_to_paths();
  let r2 = property_get_curried(r);
  let result = list_to_dictionary_value(list_names, r2);
  return result;
}
