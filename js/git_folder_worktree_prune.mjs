import { git_folder_run } from "./git_folder_run.mjs";
export async function git_folder_worktree_prune(folder) {
  "$plain folder";
  "Forgets the copies a repository still lists whose folders are no longer there, so that the name one of them was holding can be used again.";
  "A repository keeps its list of copies inside itself, on the disk it lives on. A copy laid out in memory does not live on that disk, so a restart of the machine takes the copy and leaves the entry - and laying out the next copy under the same name is then refused, naming a folder that is not there. The refusal reads as something broken rather than as something absent, which is the whole difficulty with it.";
  "Only an entry whose folder has gone is dropped. A copy somebody is working in right now is left exactly as it is, which is what makes this safe to ask for before every lay-out rather than only when something has already failed.";
  let out = await git_folder_run(folder, ["worktree", "prune"]);
  return out;
}
