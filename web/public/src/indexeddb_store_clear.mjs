import { error } from "../../../love/public/src/error.mjs";
export async function indexeddb_store_clear(db_get, store) {
  let db = await db_get();
  let tx = db.transaction(store, "readwrite");
  let s = tx.objectStore(store);
  await new Promise(function lambda3(resolve, reject) {
    let req = s.clear();
    req.onsuccess = function lambda() {
      let v = resolve();
      return v;
    };
    req.onerror = function lambda2() {
      let v2 = reject(req.error);
      return v2;
    };
  });
}
