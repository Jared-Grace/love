import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { data_identifiers_get } from "../../../love/public/src/data_identifiers_get.mjs";
import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { list_to_dictionary } from "../../../love/public/src/list_to_dictionary.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function data_identifiers_search(s) {
  marker("1");
  const { unaliased } = await function_name_to_path_unalias(s);
  s = unaliased;
  let identifiers = await data_identifiers_get();
  let list = object_property_get(identifiers, s);
  let result = list_to_dictionary(list, function_name_to_path);
  return result;
}
