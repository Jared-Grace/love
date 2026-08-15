import { folder_drive_removable } from "./folder_drive_removable.mjs";
import { path_join } from "./path_join.mjs";
export function git_mirrors_folder() {
  "The folder on the removable drive where this machine keeps a bare copy of each repository.";
  "The drive is removable on purpose, so this path is often not there at all. Nothing here checks that; the reading is done where the folder is opened, so a missing drive is answered as an empty set rather than as a failure.";
  "It sits inside the drive's gathering folder, with the kind of thing at the top, so that what belongs to the repos is together and apart from what the drive holds for its own sake.";
  let drive = folder_drive_removable();
  let folder = path_join([drive, "a", "mirrors"]);
  return folder;
}
