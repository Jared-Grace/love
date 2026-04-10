import { list_map } from "../../../love/public/src/list_map.mjs";
import { property_get_curried } from "../../../love/public/src/property_get_curried.mjs";
import { functions_names_paths } from "../../../love/public/src/functions_names_paths.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function data_identifiers_search_generic(fn, ids_comma) {
  let identifiers = await fn();
  let r = await functions_names_paths();
  let r2 = property_get_curried(r);
  let list = property_get(identifiers, ids_comma);
  function lambda(item) {}
  let mapped = list_map(list2, lambda);
  let result = list_to_dictionary_value(list, r2);
  return result;
}
