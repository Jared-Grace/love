import { folder_user } from "./folder_user.mjs";
export function g_sermon_loop_folder() {
  "Absolute folder the sermon loop hands files through - the queued books, the active-chapter list, and each verse's authored lines all live here. Single source for the folder, so moving the loop to different storage is one edit and not four, and no site can be left behind still pointing at the old place.";
  let folder = folder_user("storage/sermon_loop");
  return folder;
}
