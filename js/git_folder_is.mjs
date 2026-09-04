import { git_folder_run } from "./git_folder_run.mjs";
import { equal } from "./equal.mjs";
import { catch_only_run_async } from "./catch_only_run_async.mjs";
export async function git_folder_is(folder) {
  "Whether a folder sits inside a git working tree.";
  "Git words a not-a-repository complaint two ways. One names the parent directories it searched. The other names the mount point it stopped at, which is what it says when the walk upwards would cross a filesystem boundary. Only the opening words belong to both, so only those are matched.";
  "Matching more than that is what turns this from an answer into a throw, and it throws in exactly one place: a folder on a temporary filesystem. The frozen copy the gates are asked in is on one, so a longer fragment answers everywhere a person runs this and fails where nobody is watching.";
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
  await catch_only_run_async(lambda, "fatal: not a git repository", lambda2);
  return is;
}
