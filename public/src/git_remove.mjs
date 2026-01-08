import { git_commit_folder } from "../../../love/public/src/git_commit_folder.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { command_line_git } from "../../../love/public/src/command_line_git.mjs";
export async function git_remove() {
  const f_path = "firebase-debug.log";
  await command_line_git("rm --cached " + f_path);
  await command_line_git(command_git);
  async function lambda(item) {
    await git_commit_folder(folder, message);
  }
  await each_async(list, lambda);
}
