import { global_function_property_initialize_async } from "./global_function_property_initialize_async.mjs";
import { global_function_property_delete } from "./global_function_property_delete.mjs";
import { ebible_offline_database_name } from "./ebible_offline_database_name.mjs";
import { ebible_offline_database_open_timeout_ms } from "./ebible_offline_database_open_timeout_ms.mjs";
import { ebible_offline_store } from "./ebible_offline_store.mjs";
import { lambda_timeout } from "./lambda_timeout.mjs";
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
      request.onblocked = function lambda5() {
        "another tab of this app still holds the database open, so this upgrade cannot proceed; fail loudly instead of hanging so the reader is asked to try again";
        let v3 = reject(new Error("ebible offline database is open in another tab"));
        return v3;
      };
    });
    return opened;
  }
  async function connect() {
    "even with no event at all (a database wedged by another tab), the open resolves within a bounded time so a save can never hang forever at its first step";
    let ms = ebible_offline_database_open_timeout_ms();
    async function open_bounded() {
      let db = await lambda_timeout(open, ms);
      return db;
    }
    try {
      let db = await open_bounded();
      return db;
    } catch (e) {
      "drop the remembered attempt so the next save re-opens once the other tab lets go, rather than being poisoned by this one failure for the rest of the session";
      global_function_property_delete(ebible_offline_database, "database");
      throw e;
    }
  }
  let database = await global_function_property_initialize_async(
    ebible_offline_database,
    "database",
    connect,
  );
  return database;
}
