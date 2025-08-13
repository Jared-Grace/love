import { log_keep } from "./log_keep.mjs";
import { catch_ignore_async } from "./catch_ignore_async.mjs";
import { catch_ignore } from "./catch_ignore.mjs";
import { command_line } from "./command_line.mjs";
import { git_push } from "./git_push.mjs";
import { command_line_git } from "./command_line_git.mjs";
export async function git_acp(message) {
  await command_line_git("add -A");
  await catch_ignore_async(async function lambda() {
    await command_line_git(`commit -m "${message}"`);
  });
  await command_line_git(`fetch origin main`);
  try {
    await command_line_git(
      "rebase --autostash --no-stat --no-verify origin/main",
    );
  } catch (e) {
    log_keep("Rebase failed, aborting rebase");
    try {
      await command_line_git("rebase --abort");
    } catch (abortErr) {
      log_keep("No rebase in progress, nothing to abort.");
    }
    throw e;
  }
  await git_push();
}
