import { git_rebase } from "./git_rebase.mjs";
import { git_commit } from "./git_commit.mjs";
import { catch_only_async } from "./catch_only_async.mjs";
import { log_keep } from "./log_keep.mjs";
import { catch_ignore_async } from "./catch_ignore_async.mjs";
import { catch_ignore } from "./catch_ignore.mjs";
import { command_line } from "./command_line.mjs";
import { git_push } from "./git_push.mjs";
import { command_line_git } from "./command_line_git.mjs";
export async function git_acp(message) {
  await command_line_git("add -A");
  await git_commit(message);
  await command_line_git(`fetch origin main`);
  await git_rebase();
  await git_push();
}
