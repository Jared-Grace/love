import { file_read } from "./file_read.mjs";
import { firebase_prod_hashes_generic } from "./firebase_prod_hashes_generic.mjs";
import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { folder_public } from "./folder_public.mjs";
import { path_join } from "./path_join.mjs";
import { qa_snapshot_app_file_path } from "./qa_snapshot_app_file_path.mjs";
export async function qa_snapshot_app_hashes(folder, app_name) {
  "$plain app_name";
  "One short word standing for each piece of an app that was just built inside the frozen copy";
  "This is the point of building there at all. What comes out of a frozen copy came from one commit, so these words are a record of what that commit builds into - and a record of that can be compared against what is waiting to be sent, which is the only way anybody can say the two are the same thing";
  "Both the asking after pieces and the reducing of them are handed to shared ones rather than done again here. Both sides of a comparison have to be asked and reduced the same way or the comparison means nothing, and the surest way to keep them the same is for there to be only one of each";
  let fop = folder_public();
  let built = path_join([folder, fop]);
  let present = await folder_app_file_names(built, app_name);
  async function reader(file_name) {
    let path = qa_snapshot_app_file_path(folder, file_name);
    let text = await file_read(path);
    return text;
  }
  let hashes = await firebase_prod_hashes_generic(present, reader);
  return hashes;
}
