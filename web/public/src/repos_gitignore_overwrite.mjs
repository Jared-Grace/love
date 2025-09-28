import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_map_path_join } from "./list_map_path_join.mjs";
import { repo_path } from "./repo_path.mjs";
import { list_map } from "./list_map.mjs";
import { repos_names } from "./repos_names.mjs";
import { marker } from "./marker.mjs";
export async function repos_gitignore_overwrite() {
  marker("1");
  let repos = await repos_names();
  let f_name = ".gitignore";
  let mapped = list_map(repos, repo_path);
  let mapped2 = list_map_path_join(mapped, f_name);
  async function lambda(item) {}
  let waited = await list_map_unordered_async(list, lambda);
  return mapped2;
}
