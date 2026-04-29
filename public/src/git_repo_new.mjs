import { command_line_folder } from "../../../love/public/src/command_line_folder.mjs";
import { git_ac_call_folder } from "../../../love/public/src/git_ac_call_folder.mjs";
import { git_init_folder } from "../../../love/public/src/git_init_folder.mjs";
export async function git_repo_new(folder, repo_name) {
  let r3 = await git_init_folder(folder);
  await git_ac_call_folder(git_repo_new.name, [repo_name], folder);
  let r = await command_line_folder(
    "gh repo create " +
      repo_name +
      " --public --source=. --remote=origin --push",
    folder,
  );
}
