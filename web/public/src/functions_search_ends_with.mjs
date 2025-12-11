import { string_ends_with } from "../../../love/public/src/string_ends_with.mjs";
import { functions_search_generic } from "../../../love/public/src/functions_search_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_search_ends_with(search) {
  marker("1");
  let fn = string_ends_with;
  let result = await functions_search_generic(search, fn);
  return result;
}
