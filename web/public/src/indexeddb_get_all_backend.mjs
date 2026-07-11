import { error } from "../../../love/public/src/error.mjs";
export async function indexeddb_get_all_backend(db_get, store) {
  let db = await db_get();
  let tx = db.transaction(store, "readonly");
  let s = tx.objectStore(store);
  let all = await new Promise(function lambda3(resolve, reject) {
    let req = s.getAll();
    req.onsuccess = function lambda() {
      let v = resolve(req.result);
      return v;
    };
    req.onerror = function lambda2() {
      let v2 = reject(req.error);
      return v2;
    };
  });
  return all;
}
