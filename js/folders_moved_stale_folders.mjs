import { folder_repo_love } from "./folder_repo_love.mjs";
import { path_join } from "./path_join.mjs";
import { folder_memory_backup } from "./folder_memory_backup.mjs";
import { daemon_units_folder } from "./daemon_units_folder.mjs";
export function folders_moved_stale_folders() {
  "Every folder whose files are read when asking what still names a place that has moved.";
  "A written list rather than a walk down the whole disk, because the question is about places that were written by hand, and those live in a small number of folders somebody can name. A walk would answer with the copies as well as the originals, and a copy naming an old place is not something anybody has to go and fix.";
  "The memory notes are asked of the function that says where they are rather than written down, so this keeps looking in the right folder on the day that folder is the thing that moved.";
  "A folder inside a folder has to be named here in its own right, because the reading this feeds looks at the files sitting directly in a folder and goes no deeper. The hooks are named for exactly that reason, and the cost of leaving one out is the quietest failure of the lot: a hook that names a folder which is gone simply stops deciding, and nothing anywhere says so.";
  let love_folder = folder_repo_love();
  let r = path_join([love_folder, "js"]);
  let r2 = path_join([love_folder, "notes"]);
  let r3 = path_join([love_folder, "scripts"]);
  let r4 = path_join([love_folder, ".claude"]);
  let r6 = path_join([r4, "hooks"]);
  let folder = folder_memory_backup();
  let r5 = path_join([folder, "memory"]);
  let folder2 = daemon_units_folder();
  let folders = [love_folder, r, r2, r3, r4, r6, r5, folder2];
  return folders;
}
