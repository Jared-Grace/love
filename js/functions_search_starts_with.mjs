import { text_starts_with } from "./text_starts_with.mjs";
import { functions_search_generic } from "./functions_search_generic.mjs";
export async function functions_search_starts_with(search) {
  "Every repo function whose name begins with the given words, for when the opening of a name is the part you are sure of.";
  let fn = text_starts_with;
  let result = await functions_search_generic(search, fn);
  return result;
}
