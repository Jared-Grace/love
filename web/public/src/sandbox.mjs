import { each_async } from "../../../love/public/src/each_async.mjs";
import { command_line_folder } from "../../../love/public/src/command_line_folder.mjs";
import { folder_exists_ensure } from "../../../love/public/src/folder_exists_ensure.mjs";
import { folder_previous_join } from "../../../love/public/src/folder_previous_join.mjs";
export async function sandbox() {
  const folder = "data";
  const cmd = "dir";
  let cmds = [
    "git init",
    "gh repo create my-project --public --source=. --remote=origin --push",
  ];
  await each_async(list, async function lambda(item) {});
  let stdout2 = await command_line_folder(cmd, folder);
  return stdout2;
  let repo_name = "portfolio_qa";
  let joined = folder_previous_join(repo_name);
  let path = await folder_exists_ensure(joined);
  return joined;
}
