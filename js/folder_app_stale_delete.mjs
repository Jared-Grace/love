import { file_delete } from "./file_delete.mjs";
import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { path_join } from "./path_join.mjs";
export async function folder_app_stale_delete(folder, app_name, kept) {
  "$plain folder";
  "$plain app_name";
  "Takes out of one folder every piece of one app except the ones named as kept, answering with what it took out.";
  "A build is free to cut a piece of an app out into a file of its own, and it names that file with a number it chooses. Two builds of the same app can choose differently, so the pieces of the older build are not all overwritten by the newer one - the ones the newer build did not name are simply left lying there.";
  "Left lying there they are worse than clutter. Every later question about which pieces this app is made of asks the folder, so the folder answers with two builds' worth and the app is described as something no build ever made.";
  "Keeping nothing is a fair thing to ask for, and is how a folder is emptied of one app before it is built there fresh - after which what the folder holds is exactly what that build made.";
  "What was taken out is answered rather than swallowed, because taking a file away from a folder somebody is about to read is the kind of thing they should be able to read back.";
  let present = await folder_app_file_names(folder, app_name);
  let stale = list_without_multiple(present, kept);
  async function delete_lambda(file_name) {
    let path = path_join([folder, file_name]);
    await file_delete(path);
    return file_name;
  }
  let deleted = await list_map_unordered_async(stale, delete_lambda);
  return deleted;
}
