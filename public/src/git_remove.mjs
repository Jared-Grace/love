import { git_ignore_name } from "../../../love/public/src/git_ignore_name.mjs";
import { git_ignore_add } from "../../../love/public/src/git_ignore_add.mjs";
import { repos_gitignore_overwrite_all } from "../../../love/public/src/repos_gitignore_overwrite_all.mjs";
import { git_commit } from "../../../love/public/src/git_commit.mjs";
import { git_add } from "../../../love/public/src/git_add.mjs";
import { command_line_git_current } from "../../../love/public/src/command_line_git_current.mjs";
import { git_push } from "../../../love/public/src/git_push.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function git_remove(f_path) {
  await command_line_git_current(text_combine("rm -r --cached ", f_path));
  await git_ignore_add(f_path);
  let added = git_ignore_name();
  await git_add(added);
  await git_commit(
    text_combine_multiple(["Remove ", f_path, " and add to ", g_name]),
  );
  await git_push();
  await repos_gitignore_overwrite_all();
}
