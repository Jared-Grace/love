import { arguments_assert } from "./arguments_assert.mjs";
import { indexeddb_database_open } from "./indexeddb_database_open.mjs";
export async function indexeddb_key_delete(name, store, key) {
  "$plain key";
  "Removes whatever is kept under key in a browser database's store, and resolves once it is gone. Nothing kept there is not an error.";
  arguments_assert(arguments, 3);
  let db = await indexeddb_database_open(name, store);
  await new Promise(function lambda(resolve, reject) {
    let transaction = db.transaction(store, "readwrite");
    transaction.objectStore(store).delete(key);
    transaction.oncomplete = function lambda2() {
      resolve();
    };
    transaction.onerror = function lambda3() {
      reject(transaction.error);
    };
  });
}
