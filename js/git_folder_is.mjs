import { catch_only_run_async } from "./catch_only_run_async.mjs";
import { command_line_git_folder } from "./command_line_git_folder.mjs";
export async function git_folder_is(folder) {
  let is = null;
  async function lambda() {
    let stdout = await command_line_git_folder(
      folder,
      "rev-parse --is-inside-work-tree",
    );
    is = stdout === "true\n";
  }
  function lambda2() {
    is = false;
  }
  await catch_only_run_async(
    lambda,
    "fatal: not a git repository (or any of the parent directories): .git",
    lambda2,
  );
  return is;
}
