import { text_ends_with } from "./text_ends_with.mjs";
import { functions_search_generic } from "./functions_search_generic.mjs";
export async function functions_search_ends_with(search) {
  let fn = text_ends_with;
  let result = await functions_search_generic(search, fn);
  return result;
}
