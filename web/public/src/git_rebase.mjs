import { log_keep } from "./log_keep.mjs";
import { command_line_git } from "./command_line_git.mjs";
export async function git_rebase() {
  try {
    await command_line_git("rebase --no-stat --no-verify origin/main");
  } catch (e) {
    log_keep("Rebase failed, aborting rebase");
    try {
      await command_line_git("rebase --abort");
    } catch (abortErr) {
      log_keep("No rebase in progress, nothing to abort.");
    }
    throw e;
  }
}
