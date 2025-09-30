import { marker } from "../../../love/public/src/marker.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { repo_path } from "../../../love/public/src/repo_path.mjs";
import { repos_names } from "../../../love/public/src/repos_names.mjs";
export async function repos_paths_names_map_unordered(lambda$name$path) {
  marker("1");
  let all = await repos_names();
  async function lambda(name) {
    let path = repo_path(name);
    let mapped = await lambda$name$path(name, path);
    return mapped;
  }
  let result = await list_map_unordered_async(all, lambda);
  return result;
}
