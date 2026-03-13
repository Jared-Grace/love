import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { functions_search_generic } from "../../../love/public/src/functions_search_generic.mjs";
import { text_includes } from "../../../love/public/src/text_includes.mjs";
export async function functions_search(search) {
  arguments_assert(arguments, 1);
  let fn = text_includes;
  let result = await functions_search_generic(search, fn);
  return result;
}
