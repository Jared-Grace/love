import { folder_drive_removable } from "./folder_drive_removable.mjs";
import { path_join } from "./path_join.mjs";
export function folder_user_root() {
  "The folder all of the human's own files sit under - pictures, downloads, audio, and the store this repo keeps its own data in.";
  "It is on a drive that can be unplugged, which is the fact worth knowing about it. Every path built from here goes away when that drive does, and comes back unchanged when it returns.";
  let drive = folder_drive_removable();
  let folder = path_join([drive, "user"]);
  return folder;
}
