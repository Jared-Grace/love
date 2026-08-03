import { properties_get } from "./properties_get.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
export async function data_identifiers_search_names(f_name) {
  "The same search by identifier as its sibling, giving back only the function names rather than the file each one lives in.";
  let result = await data_identifiers_search(f_name);
  let f_names = properties_get(result);
  return f_names;
}
