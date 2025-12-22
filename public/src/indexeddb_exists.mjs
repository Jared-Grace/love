import { error } from "../../../love/public/src/error.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_exists(db_get, store, key) {
  marker("1");
  const db = await db_get();
  const tx = db.transaction(store, "readonly");
  const s = tx.objectStore(store);
  const exists = await new Promise(function lambda3(resolve, reject) {
    const req = s.count(key);
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
