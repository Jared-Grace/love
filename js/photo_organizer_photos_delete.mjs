import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { photo_organizer_storage_path } from "./photo_organizer_storage_path.mjs";
import { firebase_delete_browser_if_exists } from "./firebase_delete_browser_if_exists.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function photo_organizer_photos_delete(photos) {
  "$plain photos";
  "Deletes the stored file of every photo listed, all at once, as the owner signed in on this page. A file already gone counts as deleted.";
  arguments_assert(arguments, 1);
  async function delete_one(photo) {
    let name = property_get(photo, "name");
    let path = photo_organizer_storage_path("photos", name);
    await firebase_delete_browser_if_exists(path);
  }
  await list_map_unordered_async(photos, delete_one);
}
