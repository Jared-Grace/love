import { command_line_folder } from "../../../love/public/src/command_line_folder.mjs";
import { git_ac_call_folder } from "../../../love/public/src/git_ac_call_folder.mjs";
import { git_init_folder } from "../../../love/public/src/git_init_folder.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function git_repo_new(repo_name, folder) {
  let r3 = await git_init_folder(folder);
  await git_ac_call_folder(git_repo_new.name, [folder, repo_name], folder);
  let r = await command_line_folder(
    text_combine_multiple([
      "gh repo create ",
      repo_name,
      " --public --source=. --remote=origin --push",
    ]),
    folder,
  );
}
