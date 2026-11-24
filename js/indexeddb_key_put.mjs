import { arguments_assert } from "./arguments_assert.mjs";
import { indexeddb_database_open } from "./indexeddb_database_open.mjs";
export async function indexeddb_key_put(name, store, key, value) {
  "$plain key";
  "Keeps value under key in a browser database's store, replacing whatever was kept there, and resolves once it is written. The record is {key, value}.";
  arguments_assert(arguments, 4);
  let db = await indexeddb_database_open(name, store);
  await new Promise(function lambda(resolve, reject) {
    let transaction = db.transaction(store, "readwrite");
    transaction.objectStore(store).put({
      key,
      value,
    });
    transaction.oncomplete = function lambda2() {
      resolve();
    };
    transaction.onerror = function lambda3() {
      reject(transaction.error);
    };
  });
}
