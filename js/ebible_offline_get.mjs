import { catch_null_async } from "./catch_null_async.mjs";
import { ebible_offline_database } from "./ebible_offline_database.mjs";
import { ebible_offline_key } from "./ebible_offline_key.mjs";
import { ebible_offline_store } from "./ebible_offline_store.mjs";
import { indexeddb_get_backend } from "./indexeddb_get_backend.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_offline_get(bible_folder, name) {
  "a device that refuses browser storage answers null here, so reading falls back to the internet instead of failing";
  async function get() {
    let store = ebible_offline_store();
    let key = ebible_offline_key(bible_folder, name);
    let item = await indexeddb_get_backend(ebible_offline_database, store, key);
    if (null_is(item)) {
      return null;
    }
    let value = property_get(item, "value");
    return value;
  }
  let value = await catch_null_async(get);
  return value;
}
