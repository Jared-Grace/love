import { each_async } from "../../../love/public/src/each_async.mjs";
import { command_line_folder } from "../../../love/public/src/command_line_folder.mjs";
import { folder_exists_ensure } from "../../../love/public/src/folder_exists_ensure.mjs";
import { folder_previous_join } from "../../../love/public/src/folder_previous_join.mjs";
export async function sandbox() {
  let repo_name = "portfolio_qa";
  let joined = folder_previous_join(repo_name);
  await folder_exists_ensure(joined);
  let cmds = [
    "git init",
    "gh repo create " +
      repo_name +
      " --public --source=. --remote=origin --push",
  ];
  async function lambda(cmd) {
    let stdout2 = await command_line_folder(cmd, joined);
  }
  await each_async(cmds, lambda);
  return joined;
}
