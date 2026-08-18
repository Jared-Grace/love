import { git_ignore_name } from "./git_ignore_name.mjs";
import { git_ignore_add } from "./git_ignore_add.mjs";
import { repos_gitignore_overwrite_all } from "./repos_gitignore_overwrite_all.mjs";
import { git_commit } from "./git_commit.mjs";
import { git_add } from "./git_add.mjs";
import { git_current_run } from "./git_current_run.mjs";
import { git_push } from "./git_push.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function git_remove(f_path) {
  "Stops git tracking a path, adds it to the ignore list, and commits and pushes that.";
  "The path is handed to git as its own word rather than written into a line of text. It is a parameter, so it is whatever the caller says it is, and a line of text is split back into words before it runs - a path with a space in it stopped being one word there, and everything after the space arrived as further paths to stop tracking.";
  await git_current_run(["rm", "-r", "--cached", f_path]);
  await git_ignore_add(f_path);
  let added = git_ignore_name();
  await git_add([added]);
  let message = text_combine_multiple([
    "Remove ",
    f_path,
    " and add to ",
    added,
  ]);
  await git_commit(message);
  await git_push();
  await repos_gitignore_overwrite_all();
}
