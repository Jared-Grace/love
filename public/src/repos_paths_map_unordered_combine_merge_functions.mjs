import { repos_paths_map_unordered_combine_merge } from "../../../love/public/src/repos_paths_map_unordered_combine_merge.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { functions_path } from "../../../love/public/src/functions_path.mjs";
export async function repos_paths_map_unordered_combine_merge_functions(
  lambda$path,
) {
  arguments_assert(arguments, 1);
  let path = functions_path();
  let squashed = await repos_paths_map_unordered_combine_merge(
    path,
    lambda$path,
  );
  return squashed;
}
