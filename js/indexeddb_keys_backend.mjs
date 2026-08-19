export async function indexeddb_keys_backend(db_get, store) {
  "every key in a store and none of the values, so a caller deciding what to delete does not have to read a whole bible into memory to find its name";
  let db = await db_get();
  let tx = db.transaction(store, "readonly");
  let s = tx.objectStore(store);
  let keys = await new Promise(function lambda3(resolve, reject) {
    let req = s.getAllKeys();
    req.onsuccess = function lambda() {
      let v = resolve(req.result);
      return v;
    };
    req.onerror = function lambda2() {
      let v2 = reject(req.error);
      return v2;
    };
  });
  return keys;
}
