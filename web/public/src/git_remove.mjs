import { repos_gitignore_overwrite } from "../../../love/public/src/repos_gitignore_overwrite.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
import { git_ignore_name } from "../../../love/public/src/git_ignore_name.mjs";
import { git_commit } from "../../../love/public/src/git_commit.mjs";
import { command_line_git } from "../../../love/public/src/command_line_git.mjs";
export async function git_remove() {
  const f_path = "firebase-debug.log";
  let g_name = git_ignore_name();
  await command_line_git(command_git);
  let contents = await file_read(f_path);
  await command_line_git("rm --cached " + f_path);
  await git_commit("Remove " + f_path + " and add to " + g_name);
  await repos_gitignore_overwrite();
}
