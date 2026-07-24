import { global_function_property_initialize_async } from "./global_function_property_initialize_async.mjs";
import { ebible_offline_database_name } from "./ebible_offline_database_name.mjs";
import { ebible_offline_store } from "./ebible_offline_store.mjs";
import { not } from "./not.mjs";
export async function ebible_offline_database() {
  "one database holds every downloaded bible version; the promise is remembered so many chapters opening at once still open the database only once";
  async function open() {
    let store = ebible_offline_store();
    let name = ebible_offline_database_name();
    let opened = await new Promise(function lambda4(resolve, reject) {
      let request = indexedDB.open(name, 1);
      request.onupgradeneeded = function lambda() {
        let db = request.result;
        let has = db.objectStoreNames.contains(store);
        if (not(has)) {
          db.createObjectStore(store, {
            keyPath: "key",
          });
        }
      };
      request.onsuccess = function lambda2() {
        let v = resolve(request.result);
        return v;
      };
      request.onerror = function lambda3() {
        let v2 = reject(request.error);
        return v2;
      };
    });
    return opened;
  }
  let database = await global_function_property_initialize_async(
    ebible_offline_database,
    "database",
    open,
  );
  return database;
}
