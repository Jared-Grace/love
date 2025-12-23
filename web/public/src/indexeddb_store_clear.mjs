import { error } from "../../../love/public/src/error.mjs";
export async function indexeddb_store_clear(db_get, store) {
  const db = await db_get();
  const tx = db.transaction(store, "readwrite");
  const s = tx.objectStore(store);
  await new Promise(function lambda3(resolve, reject) {
    const req = s.clear();
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
