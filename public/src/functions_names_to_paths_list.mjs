import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { property_get_curried } from "../../../love/public/src/property_get_curried.mjs";
import { functions_names_to_paths } from "../../../love/public/src/functions_names_to_paths.mjs";
export async function functions_names_to_paths_list(expandeds) {
  let dictionary = await functions_names_to_paths();
  let c = property_get_curried(dictionary);
  let expanded_paths = list_to_dictionary_value(expandeds, c);
  return expanded_paths;
}
