import { arguments_assert } from "./arguments_assert.mjs";
import { indexeddb_database_open } from "./indexeddb_database_open.mjs";
export async function indexeddb_key_get_or_null(name, store, key) {
  "$plain key";
  "The one record kept under key in a browser database's store, or null. Reads that record alone, never the whole store, so a store of large things - videos - is not all pulled into memory to find one.";
  arguments_assert(arguments, 3);
  let db = await indexeddb_database_open(name, store);
  let found = await new Promise(function lambda(resolve, reject) {
    let request = db.transaction(store, "readonly").objectStore(store).get(key);
    request.onsuccess = function lambda2() {
      resolve(request.result ?? null);
    };
    request.onerror = function lambda3() {
      reject(request.error);
    };
  });
  return found;
}
