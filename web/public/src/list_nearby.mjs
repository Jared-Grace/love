import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { functions_search_generic } from "../../../love/public/src/functions_search_generic.mjs";
import { text_includes } from "../../../love/public/src/text_includes.mjs";
export async function list_nearby(search) {
  assert_arguments(arguments, 1);
  let fn = text_includes;
  let result = await functions_search_generic(search, fn);
  return result;
}
