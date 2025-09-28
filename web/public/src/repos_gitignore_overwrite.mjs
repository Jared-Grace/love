import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { equal_not } from "./equal_not.mjs";
import { path_resolve } from "./path_resolve.mjs";
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
  let from = await path_resolve(f_name);
  let mapped = list_map(repos, repo_path);
  let mapped2 = list_map_path_join(mapped, f_name);
  async function lambda(p) {
    let to = await path_resolve(p);
    if (equal_not(to, from)) {
      await file_copy_overwrite(from, to);
    }
  }
  let waited = await list_map_unordered_async(mapped2, lambda);
}
