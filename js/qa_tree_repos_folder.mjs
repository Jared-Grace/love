import { folder_memory } from "./folder_memory.mjs";
import { qa_snapshot_owner } from "./qa_snapshot_owner.mjs";
import { path_join } from "./path_join.mjs";
export function qa_tree_repos_folder() {
  "The stand-in for the folder the repos sit side by side in, holding this asker's frozen working copy";
  "It lives in memory rather than on the disk, because the copy is thrown away and made again on every asking and nothing about it is worth keeping past a restart";
  let memory = folder_memory();
  let owner = qa_snapshot_owner();
  let folder = path_join([memory, "qa_tree", owner, "repos"]);
  return folder;
}
