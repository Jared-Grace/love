import { error } from "../../../love/public/src/error.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_read(db_get, store, path) {
  marker("1");
  let db = await db_get();
  const tx = db.transaction(store, "readonly");
  const s = tx.objectStore(store);
  let v3 = await new Promise(function lambda3(resolve, reject) {
    const req = s.get(path);
    req.onsuccess = function lambda() {
      let v = resolve(req.result?.content ?? null);
      return v;
    };
    req.onerror = function lambda2() {
      let v2 = reject(req.error);
      return v2;
    };
  });
  return v3;
}
