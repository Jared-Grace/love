import { repos_gitignore_overwrite } from "../../../love/public/src/repos_gitignore_overwrite.mjs";
import { folder_exists_ensure } from "../../../love/public/src/folder_exists_ensure.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { functions_path } from "../../../love/public/src/functions_path.mjs";
import { repo_path } from "../../../love/public/src/repo_path.mjs";
export async function repo_new_local(repo_name) {
  let folder = repo_path(repo_name);
  let path = functions_path();
  let path2 = path_join([folder, path]);
  await folder_exists_ensure(path2);
  await repos_gitignore_overwrite(repo_name);
  return folder;
}
