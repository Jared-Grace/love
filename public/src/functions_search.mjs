import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { functions_search_generic } from "../../../love/public/src/functions_search_generic.mjs";
import { string_includes } from "../../../love/public/src/string_includes.mjs";
export async function functions_search(search) {
  assert_arguments(arguments, 1);
  let fn = string_includes;
  let result = await functions_search_generic(search, fn);
  return result;
}
