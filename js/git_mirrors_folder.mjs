import { folder_drive_removable } from "./folder_drive_removable.mjs";
import { path_join } from "./path_join.mjs";
export function git_mirrors_folder() {
  "The folder on the removable drive where this machine keeps a bare copy of each repository.";
  "The drive is removable on purpose, so this path is often not there at all. Nothing here checks that; the reading is done where the folder is opened, so a missing drive is answered as an empty set rather than as a failure.";
  let drive = folder_drive_removable();
  let folder = path_join([drive, "git_mirrors"]);
  return folder;
}
