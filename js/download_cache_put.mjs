import { catch_null_async } from "./catch_null_async.mjs";
import { download_cache_database } from "./download_cache_database.mjs";
import { download_cache_store } from "./download_cache_store.mjs";
import { indexeddb_put_backend } from "./indexeddb_put_backend.mjs";
export async function download_cache_put(key, value) {
  "save one download for next time, and let it fail quietly. a browser with no room left, or one refusing storage altogether, must not turn a page that worked into a page that throws - the reader already has what they came for by the time this runs, and the only thing lost is that the next visit is slow again";
  async function put() {
    let store = download_cache_store();
    let record = {
      key,
      value,
    };
    await indexeddb_put_backend(download_cache_database, store, key, record);
  }
  await catch_null_async(put);
}
