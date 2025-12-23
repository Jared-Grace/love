import { error } from "../../../love/public/src/error.mjs";
export async function indexeddb_get_all(db_get, store) {
  const db = await db_get();
  const tx = db.transaction(store, "readonly");
  const s = tx.objectStore(store);
  let v3 = new Promise(function lambda3(resolve, reject) {
    const req = s.getAll();
    req.onsuccess = function lambda() {
      let v = resolve(req.result);
      return v;
    };
    req.onerror = function lambda2() {
      let v2 = reject(req.error);
      return v2;
    };
  });
  return v3;
}
