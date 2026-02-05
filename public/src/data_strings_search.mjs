import { data_strings_get } from "../../../love/public/src/data_strings_get.mjs";
import { data_identifiers_search_generic } from "../../../love/public/src/data_identifiers_search_generic.mjs";
export async function data_strings_search(s) {
  let result = await data_identifiers_search_generic(data_strings_get, s);
  return result;
}
