import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
export function git_hook_commit_msg_path(folder) {
  "$plain folder";
  "Where git looks for the hook that reads a commit message before the commit is made, in a given repository.";
  "It sits under the repository's own git folder, which is not tracked by anything - so a copy per repository is an installed artifact rather than source, and the one written down in the code is the only original. That is what the gate over these compares each copy against.";
  arguments_assert(arguments, 1);
  let p = path_join([folder, ".git", "hooks", "commit-msg"]);
  return p;
}
