import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { functions_search_generic } from "../../../love/public/src/functions_search_generic.mjs";
export async function functions_search_starts_with(search) {
  let fn = text_starts_with;
  let result = await functions_search_generic(search, fn);
  return result;
}
