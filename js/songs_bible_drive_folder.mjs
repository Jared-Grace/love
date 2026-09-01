import { folder_drive_removable } from "./folder_drive_removable.mjs";
import { path_join } from "./path_join.mjs";
export function songs_bible_drive_folder() {
  "The folder on the drive that keeps every sung bible passage - a fact about this machine, so it is named here rather than written out at the one place that copies onto it.";
  "It is built out of the removable drive rather than spelling it again, so a drive that mounts somewhere else is learned in one place and this folder follows it.";
  let folder = folder_drive_removable();
  let v = path_join([folder, "music", "bible"]);
  return v;
}
