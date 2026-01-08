import { data_identifiers_search_generic } from "../../../love/public/src/data_identifiers_search_generic.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { data_identifiers_get } from "../../../love/public/src/data_identifiers_get.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function data_strings_search(s) {
  marker("1");
  let fn = data_identifiers_get;
  const v = await function_name_to_path_unalias(s);
  let unaliased = object_property_get(v, "unaliased");
  s = unaliased;
  let result = await data_identifiers_search_generic(fn, s);
  return result;
}
