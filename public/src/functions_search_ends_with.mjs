import { functions_search_generic } from "../../../love/public/src/functions_search_generic.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_search_ends_with(search) {
  marker("1");
  let fn = string_includes;
  let result = await functions_search_generic(search, fn);
  return result;
}
