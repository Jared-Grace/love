import { marker } from "./marker.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { repo_path } from "./repo_path.mjs";
import { repos_names } from "./repos_names.mjs";
export async function repos_paths_map_unordered(lambda$folder) {
  marker("1");
  let all = await repos_names();
  async function lambda(repo_name) {
    let folder = repo_path(repo_name);
    await lambda$folder(folder);
  }
  let result = await list_map_unordered_async(all, lambda);
  return result;
}
