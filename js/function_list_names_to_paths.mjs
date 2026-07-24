import { list_to_dictionary_from_object } from "./list_to_dictionary_from_object.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
export async function function_list_names_to_paths(list_names) {
  let r = await functions_names_to_paths();
  let result = list_to_dictionary_from_object(list_names, r);
  return result;
}
