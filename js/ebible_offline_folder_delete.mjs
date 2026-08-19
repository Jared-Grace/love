import { catch_null_async } from "./catch_null_async.mjs";
import { ebible_offline_database } from "./ebible_offline_database.mjs";
import { ebible_offline_folder_downloaded_remove } from "./ebible_offline_folder_downloaded_remove.mjs";
import { ebible_offline_key } from "./ebible_offline_key.mjs";
import { ebible_offline_store } from "./ebible_offline_store.mjs";
import { indexeddb_delete_list_backend } from "./indexeddb_delete_list_backend.mjs";
import { indexeddb_keys_backend } from "./indexeddb_keys_backend.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
export async function ebible_offline_folder_delete(bible_folder) {
  "give back the space one saved bible takes and leave every other one where it is, so a reader short of room can free the languages they have finished with instead of all of them";
  "every piece of a bible is keyed under its own folder and a slash, so that folder and a slash is exactly what its keys begin with - the key builder is asked for the prefix rather than the slash being spelled a second time here, and the slash is what keeps one folder from carrying off another whose name it merely starts";
  let store = ebible_offline_store();
  let name_none = "";
  let prefix = ebible_offline_key(bible_folder, name_none);
  async function clear() {
    let keys = await indexeddb_keys_backend(ebible_offline_database, store);
    let mine = list_filter_starts_with(keys, prefix);
    await indexeddb_delete_list_backend(ebible_offline_database, store, mine);
  }
  await catch_null_async(clear);
  ebible_offline_folder_downloaded_remove(bible_folder);
}
