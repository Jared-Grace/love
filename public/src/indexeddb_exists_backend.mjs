import { error } from "../../../love/public/src/error.mjs";
export async function indexeddb_exists_backend(db_get, store, key) {
  let db = await db_get();
  let tx = db.transaction(store, "readonly");
  let s = tx.objectStore(store);
  let exists = await new Promise(function lambda3(resolve, reject) {
    let req = s.count(key);
    req.onsuccess = function lambda() {
      let v = resolve(req.result > 0);
      return v;
    };
    req.onerror = function lambda2() {
      let v2 = reject(req.error);
      return v2;
    };
  });
  return exists;
}
