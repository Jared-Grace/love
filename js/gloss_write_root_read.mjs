import { gloss_write_root_folder } from "./gloss_write_root_folder.mjs";
import { file_exists } from "./file_exists.mjs";
import { folder_read } from "./folder_read.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { not } from "./not.mjs";
export async function gloss_write_root_read() {
  "What is sitting in the gloss handover folder, split into the stores' own folders and the files lying loose beside them. There should never be a loose file: one there is a passage nothing will read back.";
  "A file lands loose when the handover moves and the files already written do not move with it. That happened once - the folder was shared by every store until a second store arrived, and the day the per-store folders were added the two hundred and sixteen files written under the old arrangement stayed where they were. Nothing complained, because a store finding none of its own files looks exactly like a store nobody has authored anything for yet.";
  "Whether the folder was there at all is handed back beside the two lists, because the drive this sits on can be unplugged and an answer of no loose files then means nothing was looked at rather than nothing was wrong. The folder is read rather than made for the same reason: making it would write a folder onto the empty place the drive mounts at, and every path built from there afterwards would point at it instead of at the disk, which is how the handover was lost once before.";
  let folder = gloss_write_root_folder();
  let found = await file_exists(folder);
  let away = not(found);
  if (away) {
    let nothing = {
      found,
      stores: [],
      loose: [],
    };
    return nothing;
  }
  let all = await folder_read(folder);
  let loose = await folder_read_files(folder);
  let stores = list_without_multiple(all, loose);
  let r = {
    found,
    stores,
    loose,
  };
  return r;
}
