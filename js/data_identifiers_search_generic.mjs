import { data_identifiers_search_generic_names } from "./data_identifiers_search_generic_names.mjs";
import { function_list_names_to_paths } from "./function_list_names_to_paths.mjs";
export async function data_identifiers_search_generic(fn, ids_comma) {
  let i = await data_identifiers_search_generic_names(fn, ids_comma);
  let result = await function_list_names_to_paths(i);
  return result;
}
