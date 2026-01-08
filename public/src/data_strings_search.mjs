import { data_strings_get } from "../../../love/public/src/data_strings_get.mjs";
import { data_identifiers_search_generic } from "../../../love/public/src/data_identifiers_search_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function data_strings_search(s) {
  marker("1");
  let fn = data_strings_get;
  let result = await data_identifiers_search_generic(fn, s);
  return result;
}
