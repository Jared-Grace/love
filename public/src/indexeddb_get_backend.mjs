import { error } from "../../../love/public/src/error.mjs";
export async function indexeddb_get_backend(db_get, store, key) {
  let db = await db_get();
  const tx = db.transaction(store, "readonly");
  const s = tx.objectStore(store);
  let item = await new Promise(function lambda3(resolve, reject) {
    const req = s.get(key);
    req.onsuccess = function lambda() {
      let v = resolve(req.result ?? null);
      return v;
    };
    req.onerror = function lambda2() {
      let v2 = reject(req.error);
      return v2;
    };
  });
  return item;
}
