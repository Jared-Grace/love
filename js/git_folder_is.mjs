import { equal } from "./equal.mjs";
import { catch_only_run_async } from "./catch_only_run_async.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
export async function git_folder_is(folder) {
  let is = null;
  async function lambda() {
    let stdout = await git_folder_run(folder, [
      "rev-parse",
      "--is-inside-work-tree",
    ]);
    is = equal(stdout, "true\n");
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
