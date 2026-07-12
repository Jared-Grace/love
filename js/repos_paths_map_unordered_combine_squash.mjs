import { list_squash } from "./list_squash.mjs";
import { repos_paths_map_unordered_combine } from "./repos_paths_map_unordered_combine.mjs";
export async function repos_paths_map_unordered_combine_squash(
  path,
  lambda$path,
) {
  let result = await repos_paths_map_unordered_combine(path, lambda$path);
  let squashed = list_squash(result);
  return squashed;
}
