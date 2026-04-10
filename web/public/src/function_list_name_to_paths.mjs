import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { functions_names_paths_getter } from "../../../love/public/src/functions_names_paths_getter.mjs";
export async function function_list_name_to_paths(i) {
  let r2 = await functions_names_paths_getter();
  let result = list_to_dictionary_value(i, r2);
  return result;
}
