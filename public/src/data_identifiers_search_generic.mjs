import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function data_identifiers_search_generic(fn, s) {
  let identifiers = await fn();
  let list = property_get(identifiers, s);
  let result = list_to_dictionary_value(list, function_name_to_path);
  return result;
}
