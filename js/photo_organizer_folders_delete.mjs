import { arguments_assert } from "./arguments_assert.mjs";
import { indexeddb_delete_list_backend } from "./indexeddb_delete_list_backend.mjs";
import { photo_organizer_database } from "./photo_organizer_database.mjs";
import { photo_organizer_store } from "./photo_organizer_store.mjs";
export async function photo_organizer_folders_delete(keys) {
  "$plain keys";
  "Takes the folders under these keys off this phone, with the photos kept in them, all in one go, so a delete never stops halfway with some gone and some left.";
  arguments_assert(arguments, 1);
  let store = photo_organizer_store();
  await indexeddb_delete_list_backend(photo_organizer_database, store, keys);
}
