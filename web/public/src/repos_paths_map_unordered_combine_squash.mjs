import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { repos_paths_map_unordered_combine } from "../../../love/public/src/repos_paths_map_unordered_combine.mjs";
import { functions_path } from "../../../love/public/src/functions_path.mjs";
export async function repos_paths_map_unordered_combine_squash(mapper) {
  let path = functions_path();
  let result = await repos_paths_map_unordered_combine(path, mapper);
  let squashed = list_squash(result);
  return squashed;
}
