import { file_delete } from "./file_delete.mjs";
import { firebase_prod_app_disk_file_names } from "./firebase_prod_app_disk_file_names.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
export async function firebase_prod_app_stale_delete(app_name, kept) {
  "$plain app_name";
  "Takes away any piece of one app that is waiting to be sent and was not made by the build now replacing it, answering with what it took away.";
  "A build is free to cut a piece of an app out into a file of its own, and it names that file with a number it chooses. Two builds of the same app can choose differently, so the pieces of the older build are not all overwritten by the newer one - the ones the newer build did not name are simply left lying there.";
  "Left lying there they are worse than clutter. Every later question about which pieces this app is made of asks the folder, and the folder would answer with both builds' worth - so the note saying what this build made stops matching what is standing there, and the next sending is refused for pieces nobody put there on purpose.";
  "What was taken away is answered rather than swallowed, because taking a file out of what is about to be published is the kind of thing whoever asked for a sending should be able to read back.";
  let present = await firebase_prod_app_disk_file_names(app_name);
  let stale = list_without_multiple(present, kept);
  async function delete_lambda(file_name) {
    let relative = folder_public_join(file_name);
    let path = await user_repo_path_combine(relative);
    await file_delete(path);
    return file_name;
  }
  let deleted = await list_map_unordered_async(stale, delete_lambda);
  return deleted;
}
