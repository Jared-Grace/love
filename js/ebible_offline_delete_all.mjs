import { catch_null_async } from "./catch_null_async.mjs";
import { ebible_offline_database } from "./ebible_offline_database.mjs";
import { ebible_offline_folders_set } from "./ebible_offline_folders_set.mjs";
import { ebible_offline_store } from "./ebible_offline_store.mjs";
import { indexeddb_store_clear } from "./indexeddb_store_clear.mjs";
export async function ebible_offline_delete_all() {
  ("give the space back: every downloaded bible goes, and the list of what is downloaded goes with it");
  async function clear() {
    let store = ebible_offline_store();
    await indexeddb_store_clear(ebible_offline_database, store);
  }
  await catch_null_async(clear);
  ebible_offline_folders_set([]);
}
