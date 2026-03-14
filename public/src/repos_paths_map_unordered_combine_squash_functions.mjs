import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { repos_paths_map_unordered_combine_squash } from "../../../love/public/src/repos_paths_map_unordered_combine_squash.mjs";
import { functions_path } from "../../../love/public/src/functions_path.mjs";
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
