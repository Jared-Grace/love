import { gloss_write_root_folder } from "./gloss_write_root_folder.mjs";
import { file_exists } from "./file_exists.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { not } from "./not.mjs";
export async function gloss_write_root_files() {
  "Files sitting directly in the gloss handover folder rather than inside one of the stores' folders. There should never be any: a file here is a passage nothing will read back.";
  "A file lands here when the handover moves and the files already written do not move with it. That happened once already - the folder was shared by every store until a second store arrived, and the day the per-store folders were added the files written under the old arrangement stayed where they were. Nothing complained, because a store finding none of its own files looks exactly like a store nobody has authored anything for yet.";
  "The drive this sits on can be unplugged, so a missing folder is answered as nothing rather than made. Making it would write a folder onto the empty place the drive mounts at, and every path built from there afterwards would point at it instead of at the disk - which is how the handover was lost once before.";
  let folder = gloss_write_root_folder();
  let present = await file_exists(folder);
  let away = not(present);
  if (away) {
    let none = [];
    return none;
  }
  let files = await folder_read_files(folder);
  return files;
}
