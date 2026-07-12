import { git_ignore_name } from "./git_ignore_name.mjs";
import { git_ignore_add } from "./git_ignore_add.mjs";
import { repos_gitignore_overwrite_all } from "./repos_gitignore_overwrite_all.mjs";
import { git_commit } from "./git_commit.mjs";
import { git_add } from "./git_add.mjs";
import { command_line_git_current } from "./command_line_git_current.mjs";
import { git_push } from "./git_push.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
