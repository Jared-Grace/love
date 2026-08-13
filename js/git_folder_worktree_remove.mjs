import { git_folder_run } from "./git_folder_run.mjs";
export async function git_folder_worktree_remove(folder, worktree_folder) {
  "$plain folder";
  "$plain worktree_folder";
  "Takes away a copy laid out earlier, and tells the repository it is gone, so a later copy is not refused because of a folder nobody is using.";
  "Anything left behind in the copy goes with it. That is wanted rather than tolerated - the copy exists to be read from, so a change made inside it was never meant to be kept.";
  let out = await git_folder_run(folder, [
    "worktree",
    "remove",
    "--force",
    worktree_folder,
  ]);
  return out;
}
