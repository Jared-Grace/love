import { marker } from "../../../love/public/src/marker.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { repo_path } from "../../../love/public/src/repo_path.mjs";
import { repos_names } from "../../../love/public/src/repos_names.mjs";
export async function repos_paths_names_map_unordered(lambda$folder) {
  marker("1");
  let all = await repos_names();
  async function lambda(repo_name) {
    let folder = repo_path(repo_name);
    let mapped = await lambda$folder(folder);
    return mapped;
  }
  let result = await list_map_unordered_async(all, lambda);
  return result;
}
