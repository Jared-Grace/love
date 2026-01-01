import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { functions_search_generic } from "../../../love/public/src/functions_search_generic.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_search(search) {
  assert_arguments(arguments, 1);
  marker("1");
  let fn = string_includes;
  let result = await functions_search_generic(search, fn);
  return result;
}
