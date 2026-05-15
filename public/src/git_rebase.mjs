import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { command_line_git_current } from "../../../love/public/src/command_line_git_current.mjs";
export async function git_rebase() {
  try {
    await command_line_git_current("rebase --no-stat --no-verify origin/main");
  } catch (e) {
    log_keep(git_rebase.name, "Rebase failed, aborting rebase");
    try {
      await command_line_git_current("rebase --abort");
    } catch (abortErr) {
      log_keep(git_rebase.name, "No rebase in progress, nothing to abort.");
    }
    throw e;
  }
}
