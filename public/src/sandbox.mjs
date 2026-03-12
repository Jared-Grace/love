import { repos_gitignore_overwrite_list } from "../../../love/public/src/repos_gitignore_overwrite_list.mjs";
import { command_line_folder_curried_right } from "../../../love/public/src/command_line_folder_curried_right.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { folder_previous_join } from "../../../love/public/src/folder_previous_join.mjs";
export async function sandbox() {
  let repo_name = "portfolio_qa";
  let joined = folder_previous_join(repo_name);
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
