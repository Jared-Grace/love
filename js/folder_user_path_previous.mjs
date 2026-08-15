import { folder_drive_removable } from "./folder_drive_removable.mjs";
import { path_join } from "./path_join.mjs";
export function folder_user_path_previous() {
  "Where the human's files were kept before, still read so that anything filed under the old arrangement can be found.";
  "The separator that used to be on the end is gone, and nothing turns on it: the one caller hands this straight to the joiner, which puts the separators in itself.";
  let drive = folder_drive_removable();
  let p = path_join([drive, "files", "2"]);
  return p;
}
