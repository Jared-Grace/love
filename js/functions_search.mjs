import { arguments_assert } from "./arguments_assert.mjs";
import { functions_search_generic } from "./functions_search_generic.mjs";
import { text_includes } from "./text_includes.mjs";
export async function functions_search(search) {
  "Every function whose name holds all of the words handed in, so several words comma-joined narrow the answer rather than widening it.";
  arguments_assert(arguments, 1);
  let fn = text_includes;
  let result = await functions_search_generic(search, fn);
  return result;
}
