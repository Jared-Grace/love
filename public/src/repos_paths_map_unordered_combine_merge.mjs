import { objects_merge } from "../../../love/public/src/objects_merge.mjs";
import { repos_paths_map_unordered_combine } from "../../../love/public/src/repos_paths_map_unordered_combine.mjs";
export async function repos_paths_map_unordered_combine_merge(
  path,
  lambda$path,
) {
  let result = await repos_paths_map_unordered_combine(path, lambda$path);
  let merged = objects_merge(result);
  return merged;
}
