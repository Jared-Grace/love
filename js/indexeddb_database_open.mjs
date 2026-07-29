import { global_function_property_initialize_async } from "./global_function_property_initialize_async.mjs";
import { global_function_property_delete } from "./global_function_property_delete.mjs";
import { indexeddb_database_open_timeout_ms } from "./indexeddb_database_open_timeout_ms.mjs";
import { lambda_timeout } from "./lambda_timeout.mjs";
import { not } from "./not.mjs";
export async function indexeddb_database_open(name, store) {
  "open one browser database holding one store, and remember the attempt under that database's own name so many readers starting at once open it only once. every record in the store carries its own key, which is what a keyed read looks for - so a reader receives the one record it asked for rather than the whole store";
  async function open() {
    let opened = await new Promise(function lambda(resolve, reject) {
      let version = 1;
      let request = indexedDB.open(name, version);
      request.onupgradeneeded = function lambda2() {
        let upgrading = request.result;
        let has = upgrading.objectStoreNames.contains(store);
        if (not(has)) {
          upgrading.createObjectStore(store, {
            keyPath: "key",
          });
        }
      };
      request.onsuccess = function lambda3() {
        let v = resolve(request.result);
        return v;
      };
      request.onerror = function lambda4() {
        let v2 = reject(request.error);
        return v2;
      };
      request.onblocked = function lambda5() {
        "another tab still holds this database open, so the change waiting on it cannot go ahead; say so rather than leaving the reader waiting on something that will never arrive";
        let v3 = reject(new Error("a browser database is open in another tab"));
        return v3;
      };
    });
    return opened;
  }
  async function connect() {
    "even with no event at all - a database wedged by another tab - the opening gives up within a bounded time, so nothing built on this can hang forever at its first step";
    let ms = indexeddb_database_open_timeout_ms();
    try {
      async function open_bounded() {
        let bounded = await lambda_timeout(open, ms);
        return bounded;
      }
      let db = await open_bounded();
      return db;
    } catch (e) {
      ("forget the failed attempt so the next reader opens it again once the other tab lets go, rather than every later read being poisoned by this one failure");
      global_function_property_delete(indexeddb_database_open, name);
      throw e;
    }
  }
  let database = await global_function_property_initialize_async(
    indexeddb_database_open,
    name,
    connect,
  );
  return database;
}
