import { arguments_assert } from "./arguments_assert.mjs";
import { repos_paths_map_unordered_combine_squash } from "./repos_paths_map_unordered_combine_squash.mjs";
import { functions_path } from "./functions_path.mjs";
export async function repos_paths_map_unordered_combine_squash_functions(
  lambda$path,
) {
  arguments_assert(arguments, 1);
  let path = functions_path();
  let squashed = await repos_paths_map_unordered_combine_squash(
    path,
    lambda$path,
  );
  return squashed;
}
