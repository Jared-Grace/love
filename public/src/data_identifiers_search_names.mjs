import { properties_get } from "../../../love/public/src/properties_get.mjs";
import { data_identifiers_search } from "../../../love/public/src/data_identifiers_search.mjs";
export async function data_identifiers_search_names(f_name) {
  let result = await data_identifiers_search(f_name);
  let properties = properties_get(result);
  return properties;
}
