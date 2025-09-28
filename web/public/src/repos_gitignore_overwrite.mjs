import { path_repo } from "./path_repo.mjs";
import { list_map } from "./list_map.mjs";
import { repos_names } from "./repos_names.mjs";
import { marker } from "./marker.mjs";
export async function repos_gitignore_overwrite() {
  marker("1");
  let repos = await repos_names();
  let f_name = ".gitignore";
  function lambda(r) {
    let folder = path_repo(repo_name);
  }
  let mapped = list_map(repos, lambda);
}
