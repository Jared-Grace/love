import { path_normalize } from "../../../love/public/src/path_normalize.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function indexeddb_read(db_get, store, path) {
  marker("1");
  let db = await db_get();
  let normalized = path_normalize(path);
  const tx = db.transaction(store, "readonly");
  const s = tx.objectStore(store);
  let v3 = await new Promise(function lambda3(resolve, reject) {
    const req = s.get(normalized);
    req.onsuccess = function lambda() {
      let v = resolve(req.result ?? null);
      return v;
    };
    req.onerror = function lambda2() {
      let v2 = reject(req.error);
      return v2;
    };
  });
  return v3;
}
