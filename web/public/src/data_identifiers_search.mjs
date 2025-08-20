import { function_name_to_path } from "./function_name_to_path.mjs";
import { list_to_dictionary } from "./list_to_dictionary.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { data_property_get } from "./data_property_get.mjs";
import { marker } from "./marker.mjs";
export async function data_identifiers_search(s) {
  marker("1");
  let identifiers = await data_property_get("identifiers");
  let list = object_property_get(identifiers, s);
  let result = list_to_dictionary(f_names_search, function_name_to_path);
  return list;
}
