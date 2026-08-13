import { git_folder_run } from "./git_folder_run.mjs";
export async function git_folder_worktree_add(folder, worktree_folder, commit) {
  "$plain folder";
  "$plain worktree_folder";
  "$plain commit";
  "Lays out a repository as it stood at one commit, in a folder of its own, so that what was written then can be read and run without disturbing what is being written now.";
  "Nothing about the working folder moves. The copy carries no branch of its own either, so it can be made and taken away while somebody else is committing, which is the ordinary case here.";
  let out = await git_folder_run(folder, [
    "worktree",
    "add",
    "--detach",
    worktree_folder,
    commit,
  ]);
  return out;
}
