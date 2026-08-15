import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { file_parent_exists_ensure } from "./file_parent_exists_ensure.mjs";
export async function git_history_bundle_write(folder, file_path) {
  "$plain folder";
  "$plain file_path";
  "Writes the whole of a repository's history into one file, and then reads that file back to prove it is whole.";
  "This is what makes a rewrite something that can be taken back. A second copy of the repository would do the same job and is worse at it: something can be pushed into a copy, and then the copy is no longer what was there before. Nothing can be pushed into a file, and git will say for itself whether the file holds everything it claims to - so the undo is one inert thing that answers for its own completeness.";
  "The proving is done here rather than left to the caller, because a file written and never read back is exactly the shape of an undo that is discovered to be empty on the day it is needed.";
  arguments_assert(arguments, 2);
  await file_parent_exists_ensure(file_path);
  await git_folder_run(folder, ["bundle", "create", file_path, "--all"]);
  let verified = await git_folder_run(folder, ["bundle", "verify", file_path]);
  let r = {
    file_path,
    verified,
  };
  return r;
}
