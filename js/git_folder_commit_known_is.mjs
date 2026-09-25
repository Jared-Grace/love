import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { null_is } from "./null_is.mjs";
export async function git_folder_commit_known_is(folder, commit) {
  "$plain folder";
  "$plain commit";
  "Whether a repository holds the commit a name is given for, so that the name can be asked questions about at all. Reads and changes nothing.";
  "Asked before any question about where a commit sits, because a name this repository cannot resolve makes every such question answer falsely rather than refuse. Git answers an unknown name with a failure, and a failure caught and read as a plain no turns 'I have never heard of this' into 'no, it is not there' - two answers that mean opposite things about how much to trust the verdict.";
  "A name reaching here is usually one an address handed over, so not knowing it is an ordinary outcome and not a fault: an address standing on a history this repository has replaced is holding a name that was thrown away here.";
  arguments_assert(arguments, 2);
  async function git_folder_commit_known_is_ask() {
    await git_folder_run(folder, ["cat-file", "-e", commit + "^{commit}"]);
  }
  let trouble = await catch_error_text_or_null_async(
    git_folder_commit_known_is_ask,
  );
  let known = null_is(trouble);
  return known;
}
