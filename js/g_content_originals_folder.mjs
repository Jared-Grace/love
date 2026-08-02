import { g_content_backup_folder } from "./g_content_backup_folder.mjs";
import { path_join } from "./path_join.mjs";
export function g_content_originals_folder() {
  "Where the drive's own copies sit inside the backup repo.";
  "Held apart from what came down from storage, because the two disagree and neither one is simply right - storage has the newer wording and the drive has the wording it was changed from. Mixing them into one place would leave a reader with no way to ask which is which.";
  let folder = g_content_backup_folder();
  let path = path_join([folder, "original"]);
  return path;
}
