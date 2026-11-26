import { arguments_assert } from "./arguments_assert.mjs";
import { photo_organizer_store } from "./photo_organizer_store.mjs";
import { property_get } from "./property_get.mjs";
import { indexeddb_put_backend } from "./indexeddb_put_backend.mjs";
import { photo_organizer_database } from "./photo_organizer_database.mjs";
export async function photo_organizer_folder_put(folder) {
  "$plain folder";
  "Keep one folder on this phone as it now stands - its name, the folder it sits inside, and its photos - written over the one kept under the same key, so the last change is the one kept.";
  arguments_assert(arguments, 1);
  let store = photo_organizer_store();
  let key = property_get(folder, "key");
  await indexeddb_put_backend(photo_organizer_database, store, key, folder);
}
