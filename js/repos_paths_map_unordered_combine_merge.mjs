import { objects_merge } from "./objects_merge.mjs";
import { repos_paths_map_unordered_combine } from "./repos_paths_map_unordered_combine.mjs";
export async function repos_paths_map_unordered_combine_merge(
  path,
  lambda$path,
) {
  let result = await repos_paths_map_unordered_combine(path, lambda$path);
  let merged = objects_merge(result);
  return merged;
}
