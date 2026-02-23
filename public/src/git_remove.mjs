import { text_between_newline_curried_right } from "../../../love/public/src/text_between_newline_curried_right.mjs";
import { repos_gitignore_overwrite } from "../../../love/public/src/repos_gitignore_overwrite.mjs";
import { git_commit } from "../../../love/public/src/git_commit.mjs";
import { git_add } from "../../../love/public/src/git_add.mjs";
import { file_transform } from "../../../love/public/src/file_transform.mjs";
import { command_line_git } from "../../../love/public/src/command_line_git.mjs";
import { git_ignore_name } from "../../../love/public/src/git_ignore_name.mjs";
import { git_push } from "../../../love/public/src/git_push.mjs";
export async function git_remove(f_path) {
  await command_line_git("rm -r --cached " + f_path);
  let g_name = git_ignore_name();
  let lambda = text_between_newline_curried_right(f_path);
  await file_transform(g_name, lambda);
  let added = g_name;
  await git_add(added);
  await git_commit("Remove " + f_path + " and add to " + g_name);
  await git_push();
  await repos_gitignore_overwrite();
}
