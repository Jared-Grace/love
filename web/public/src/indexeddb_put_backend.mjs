import { error } from "../../../love/public/src/error.mjs";
export async function indexeddb_put_backend(db_get, store, key, next) {
  let db = await db_get();
  if (false) {
    let previous = await new Promise(function lambda3(resolve, reject) {
      let tx = db.transaction(store, "readonly");
      let s = tx.objectStore(store);
      let req = s.get(key);
      req.onsuccess = function lambda() {
        let v = resolve(req.result ?? null);
        return v;
      };
      req.onerror = function lambda2() {
        let v2 = reject(req.error);
        return v2;
      };
    });
  }
  let tx = db.transaction(store, "readwrite");
  let s = tx.objectStore(store);
  s.put(next);
  await new Promise(function lambda6(resolve, reject) {
    tx.oncomplete = resolve;
    tx.onerror = function lambda4() {
      let v3 = reject(tx.error);
      return v3;
    };
    tx.onabort = function lambda5() {
      let v4 = reject(tx.error);
      return v4;
    };
  });
}
