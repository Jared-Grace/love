import { repo_new_local } from "../../../love/public/src/repo_new_local.mjs";
import { git_ac_call_folder } from "../../../love/public/src/git_ac_call_folder.mjs";
import { command_line_folder } from "../../../love/public/src/command_line_folder.mjs";
export async function repo_new(repo_name) {
  let folder = await repo_new_local(repo_name);
  await git_ac_call_folder(repo_new.name, [repo_name], folder);
  let r = await command_line_folder(
    "gh repo create " +
      repo_name +
      " --public --source=. --remote=origin --push",
    folder,
  );
  return folder;
}
