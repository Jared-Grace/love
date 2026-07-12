import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { repo_path } from "./repo_path.mjs";
import { repos_names } from "./repos_names.mjs";
export async function repos_paths_names_map_unordered(lambda$name$path) {
  let all = await repos_names();
  async function lambda(repo_name) {
    let path = repo_path(repo_name);
    let mapped = await lambda$name$path(repo_name, path);
    return mapped;
  }
  let result = await list_map_unordered_async(all, lambda);
  return result;
}
