import { log_keep } from "./log_keep.mjs";
import { git_current_run } from "./git_current_run.mjs";
export async function git_rebase() {
  try {
    await git_current_run([
      "rebase",
      "--no-stat",
      "--no-verify",
      "origin/main",
    ]);
  } catch (e) {
    log_keep(git_rebase.name, "Rebase failed, aborting rebase");
    try {
      await git_current_run(["rebase", "--abort"]);
    } catch (abortErr) {
      log_keep(git_rebase.name, "No rebase in progress, nothing to abort.");
    }
    throw e;
  }
}
