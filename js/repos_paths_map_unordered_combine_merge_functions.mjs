import { repos_paths_map_unordered_combine_merge } from "./repos_paths_map_unordered_combine_merge.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_path } from "./functions_path.mjs";
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
