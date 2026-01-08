import { function_read } from "../../../love/public/src/function_read.mjs";
import { git_ignore_name } from "../../../love/public/src/git_ignore_name.mjs";
import { git_commit } from "../../../love/public/src/git_commit.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { command_line_git } from "../../../love/public/src/command_line_git.mjs";
export async function git_remove() {
  const f_path = "firebase-debug.log";
  let g_name = git_ignore_name();
  await command_line_git(command_git);
  async function lambda(item) {
    let v = await function_read(f_name);
    await command_line_git("rm --cached " + f_path);
    await git_commit("Remove " + f_path + " and add to " + g_name);
  }
  await each_async(list, lambda);
}
