import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { file_copy_overwrite } from "../../../love/public/src/file_copy_overwrite.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { list_map_path_join } from "../../../love/public/src/list_map_path_join.mjs";
import { repo_path } from "../../../love/public/src/repo_path.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { path_resolve } from "../../../love/public/src/path_resolve.mjs";
import { git_ignore_name } from "../../../love/public/src/git_ignore_name.mjs";
export async function repos_gitignore_overwrite_list(repos) {
  let f_name = git_ignore_name();
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
