import { functions_search_generic } from "../../../love/public/src/functions_search_generic.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function functions_search(search) {
  marker("1");
  let fn = string_includes;
  let result = functions_search_generic(search, fn);
  return result;
}
