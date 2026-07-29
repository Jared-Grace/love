import { catch_null_async } from "./catch_null_async.mjs";
import { download_cache_database } from "./download_cache_database.mjs";
import { download_cache_store } from "./download_cache_store.mjs";
import { indexeddb_get_backend } from "./indexeddb_get_backend.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function download_cache_get(key) {
  "hand back the saved copy of one download, or nothing at all if there is none. a device that refuses browser storage answers nothing here too, so a reader on such a device falls back to the internet instead of meeting an error - which is the whole reason this is allowed to fail quietly: everything it holds is still out there to be fetched again";
  async function get() {
    let store = download_cache_store();
    let item = await indexeddb_get_backend(download_cache_database, store, key);
    let missing = null_is(item);
    if (missing) {
      return null;
    }
    let saved = property_get(item, "value");
    return saved;
  }
  let value = await catch_null_async(get);
  return value;
}
