import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { null_is } from "./null_is.mjs";
export async function git_folder_commit_ancestor_is(folder, ancestor, commit) {
  "$plain folder";
  "$plain ancestor";
  "$plain commit";
  "Whether one commit comes somewhere before another in a repository's own history, counting a commit as coming before itself. Reads and changes nothing.";
  "This is the question to ask of an address after a history was replaced, and asking whether the address is standing on exactly what was sent is the wrong one. Sending a rewritten history takes a long time, and everybody here writes to one branch while it is going, so the moment it lands the address is already behind what this folder is holding - and behind by ordinary commits that will arrive by themselves. An address holding what was sent, or anything built on top of it, took the rewrite; only an address holding something the rewrite is not underneath did not.";
  "Both names must be ones this repository holds, which the caller settles first. Asked of a name it does not hold, git fails rather than answering, and the answer would then read as a plain no - see the reason spelled beside the asking of that.";
  arguments_assert(arguments, 3);
  async function git_folder_commit_ancestor_is_ask() {
    await git_folder_run(folder, [
      "merge-base",
      "--is-ancestor",
      ancestor,
      commit,
    ]);
  }
  let trouble = await catch_error_text_or_null_async(
    git_folder_commit_ancestor_is_ask,
  );
  let before = null_is(trouble);
  return before;
}
