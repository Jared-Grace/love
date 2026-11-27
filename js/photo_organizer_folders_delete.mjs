import { arguments_assert } from "./arguments_assert.mjs";
import { photo_organizer_folder_path } from "./photo_organizer_folder_path.mjs";
import { firebase_delete_browser_if_exists } from "./firebase_delete_browser_if_exists.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function photo_organizer_folders_delete(keys) {
  "$plain keys";
  "Takes the folders under these keys out of storage, all at once, as the owner signed in on this page. The pictures in them are deleted on their own, by whoever knows which they are.";
  arguments_assert(arguments, 1);
  async function delete_one(key) {
    let path = photo_organizer_folder_path(key);
    await firebase_delete_browser_if_exists(path);
  }
  await list_map_unordered_async(keys, delete_one);
}
