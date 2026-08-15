import { folder_drive_user } from "./folder_drive_user.mjs";
export function folder_user_root() {
  "The folder all of the human's own files sit under - pictures, downloads, audio, and the store this repo keeps its own data in.";
  "It is on a drive that can be unplugged, which is the fact worth knowing about it. Every path built from here goes away when that drive does, and comes back unchanged when it returns.";
  "Where that folder is now is asked of the one function that names it, rather than spelled again by joining the drive and the name. This line used to build the old place a piece at a time, and building it that way is what let the move pass it by: the hunt for what still names a folder searches for the folder written out, and a path assembled from parts is nowhere written out. The disk had already moved, so every path built from here pointed into a folder that was gone, and the writes made a fresh empty one there instead of failing.";
  let folder = folder_drive_user();
  return folder;
}
