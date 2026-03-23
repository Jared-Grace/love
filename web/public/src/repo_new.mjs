import { repos_gitignore_overwrite } from "../../../love/public/src/repos_gitignore_overwrite.mjs";
import { git_ac_call_folder } from "../../../love/public/src/git_ac_call_folder.mjs";
import { git_init_folder } from "../../../love/public/src/git_init_folder.mjs";
import { command_line_folder } from "../../../love/public/src/command_line_folder.mjs";
import { folder_exists_ensure } from "../../../love/public/src/folder_exists_ensure.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { functions_path } from "../../../love/public/src/functions_path.mjs";
import { repo_path } from "../../../love/public/src/repo_path.mjs";
export async function repo_new(repo_name) {
  let folder = repo_path(repo_name);
  let path = functions_path();
  let path2 = path_join([folder, path]);
  await folder_exists_ensure(path2);
  let r3 = await git_init_folder(folder);
  await repos_gitignore_overwrite(repo_name);
  await git_ac_call_folder(repo_new.name, [repo_name], folder);
  let r = await command_line_folder(
    "gh repo create " +
      repo_name +
      " --public --source=. --remote=origin --push",
    folder,
  );
  return folder;
}
