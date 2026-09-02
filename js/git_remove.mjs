import { arguments_assert } from "./arguments_assert.mjs";
import { git_current_run } from "./git_current_run.mjs";
import { git_ignore_add } from "./git_ignore_add.mjs";
import { git_ignore_name } from "./git_ignore_name.mjs";
import { git_add } from "./git_add.mjs";
import { fn_name } from "./fn_name.mjs";
import { git_call_message } from "./git_call_message.mjs";
import { git_commit } from "./git_commit.mjs";
import { git_push } from "./git_push.mjs";
import { repos_gitignore_overwrite_all } from "./repos_gitignore_overwrite_all.mjs";
export async function git_remove(f_path) {
  "Stops git tracking a path, adds it to the ignore list, and commits and pushes that.";
  "The path is handed to git as its own word rather than written into a line of text. It is a parameter, so it is whatever the caller says it is, and a line of text is split back into words before it runs - a path with a space in it stopped being one word there, and everything after the space arrived as further paths to stop tracking.";
  "The commit is messaged the way every other commit made by a named command is messaged: this function's own name, then the one thing it was run on. It said `Remove <path> and add to <the ignore file>` for a long time, which is a sentence somebody wrote rather than a command anybody can run again - and this repo is public and its log is not read before it is published, so a hand-written sentence in a message is unreviewed prose reaching people. Naming the command instead costs nothing and says strictly more: the path is still there, and now the word in front of it is a command that would reproduce the change.";
  arguments_assert(arguments, 1);
  await git_current_run(["rm", "-r", "--cached", f_path]);
  await git_ignore_add(f_path);
  let added = git_ignore_name();
  await git_add([added]);
  let called = fn_name("git_remove");
  let message = await git_call_message(called, [f_path]);
  await git_commit(message);
  await git_push();
  await repos_gitignore_overwrite_all();
}
