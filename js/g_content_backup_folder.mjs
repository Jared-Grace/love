import { folder_home_backup } from "./folder_home_backup.mjs";
export function g_content_backup_folder() {
  "The git repo the game's written content is kept in.";
  "Its own repo rather than a folder of the source one, for the same reason the memory notes have theirs: it changes when somebody writes a sermon, not when somebody writes code, and everybody who clones the source would otherwise carry it.";
  let folder = folder_home_backup("love_g_content");
  return folder;
}
