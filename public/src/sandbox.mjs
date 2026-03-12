import { git_acp_folder } from "../../../love/public/src/git_acp_folder.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { functions_path } from "../../../love/public/src/functions_path.mjs";
import { repo_path } from "../../../love/public/src/repo_path.mjs";
import { repos_gitignore_overwrite_list } from "../../../love/public/src/repos_gitignore_overwrite_list.mjs";
import { command_line_folder_curried_right } from "../../../love/public/src/command_line_folder_curried_right.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { folder_exists_ensure } from "../../../love/public/src/folder_exists_ensure.mjs";
export async function sandbox() {
  let repo_name = "portfolio_qa";
  let joined = repo_path(repo_name);
  let path = functions_path();
  let path2 = path_join([joined, path]);
  await folder_exists_ensure(path2);
  await git_acp_folder(joined, "message");
  await repos_gitignore_overwrite_list([repo_name]);
  let cmds = [
    "git init",
    "gh repo create " +
      repo_name +
      " --public --source=. --remote=origin --push",
  ];
  let r2 = await command_line_folder_curried_right(joined);
  await each_async(cmds, r2);
  return joined;
}
