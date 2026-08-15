import { folder_repo_love } from "./folder_repo_love.mjs";
import { path_join } from "./path_join.mjs";
import { folder_memory_backup } from "./folder_memory_backup.mjs";
import { daemon_units_folder } from "./daemon_units_folder.mjs";
export function folders_moved_stale_folders() {
  "Every folder whose files are read when asking what still names a place that has moved.";
  "A written list rather than a walk down the whole disk, because the question is about places that were written by hand, and those live in a small number of folders somebody can name. A walk would answer with the copies as well as the originals, and a copy naming an old place is not something anybody has to go and fix.";
  "The memory notes are asked of the function that says where they are rather than written down, so this keeps looking in the right folder on the day that folder is the thing that moved.";
  let love_folder = folder_repo_love();
  let r = path_join([love_folder, "js"]);
  let r2 = path_join([love_folder, "notes"]);
  let r3 = path_join([love_folder, "scripts"]);
  let r4 = path_join([love_folder, ".claude"]);
  let folder = folder_memory_backup();
  let r5 = path_join([folder, "memory"]);
  let folder2 = daemon_units_folder();
  let folders = [love_folder, r, r2, r3, r4, r5, folder2];
  return folders;
}
