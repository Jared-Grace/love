import { path_join } from "./path_join.mjs";
import { repo_path } from "./repo_path.mjs";
import { list_map } from "./list_map.mjs";
import { repos_names } from "./repos_names.mjs";
import { marker } from "./marker.mjs";
export async function repos_gitignore_overwrite() {
  marker("1");
  let repos = await repos_names();
  let f_name = ".gitignore";
  let mapped = list_map(repos, repo_path);
  function lambda(item) {
    let joined = path_join([item, f_name]);
    return joined;
  }
  let mapped2 = list_map(list, lambda);
}
