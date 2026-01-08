import { git_add } from "../../../love/public/src/git_add.mjs";
import { file_transform } from "../../../love/public/src/file_transform.mjs";
import { string_combine_newline } from "../../../love/public/src/string_combine_newline.mjs";
import { repos_gitignore_overwrite } from "../../../love/public/src/repos_gitignore_overwrite.mjs";
import { git_ignore_name } from "../../../love/public/src/git_ignore_name.mjs";
import { git_commit } from "../../../love/public/src/git_commit.mjs";
import { command_line_git } from "../../../love/public/src/command_line_git.mjs";
export async function git_remove() {
  const f_path = "firebase-debug.log";
  let g_name = git_ignore_name();
  await command_line_git("rm --cached " + f_path);
  function lambda(before) {
    let after = string_combine_newline(before, f_path);
    return after;
  }
  await file_transform(g_name, lambda);
  let added = g_name;
  await git_add(added);
  await git_commit("Remove " + f_path + " and add to " + g_name);
  await repos_gitignore_overwrite();
}
