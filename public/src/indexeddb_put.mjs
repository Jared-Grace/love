import { error } from "../../../love/public/src/error.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_put(db_get, store, key, value_get) {
  marker("1");
  const db = await db_get();
  const tx = db.transaction(store, "readwrite");
  const s = tx.objectStore(store);
  const value = await new Promise(function lambda3(resolve, reject) {
    const req = s.get(key);
    req.onsuccess = async function lambda() {
      let previous = req.result ?? null;
      try {
        const next = await value_get(previous);
        s.put(next);
        resolve(next);
      } catch (e) {
        reject(e);
      }
    };
    req.onerror = function lambda2() {
      let v = reject(req.error);
      return v;
    };
  });
  await new Promise(function lambda6(resolve, reject) {
    tx.oncomplete = resolve;
    tx.onerror = function lambda4() {
      let v2 = reject(tx.error);
      return v2;
    };
    tx.onabort = function lambda5() {
      let v3 = reject(tx.error);
      return v3;
    };
  });
  return value;
}
