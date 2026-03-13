import { repos_paths_map_unordered_combine_squash } from "../../../love/public/src/repos_paths_map_unordered_combine_squash.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { functions_search_generic } from "../../../love/public/src/functions_search_generic.mjs";
import { text_includes } from "../../../love/public/src/text_includes.mjs";
export async function functions_search(search) {
  arguments_assert(arguments, 1);
  let squashed = await repos_paths_map_unordered_combine_squash(mapper);
  let fn = text_includes;
  let result = await functions_search_generic(search, fn);
  return result;
}
